import React, { useState, useRef, useEffect } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WebImageFilter from './WebImageFilter';
import FileSaver from 'file-saver';
import * as FileSystem from 'expo-file-system';


const useCanvasToDataURL = (imageSrc, style) => {
    const canvasRef = useRef(null);
    const [dataURL, setDataURL] = useState(null);
  
    useEffect(() => {
      if (!imageSrc || !canvasRef.current) return;
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const img = new Image();
      img.src = imageSrc;
      img.crossOrigin = 'Anonymous'; // This is required if the image is hosted on a different domain
  
      img.onload = () => {
        canvas.width = style.width;
        canvas.height = style.height;
        ctx.filter = style.filter;
        ctx.drawImage(img, 0, 0, style.width, style.height);
        const newDataURL = canvas.toDataURL('image/png');
        setDataURL(newDataURL);
      };
    }, [imageSrc, style]);
  
    return { dataURL, canvasRef };
  };





const FilterOptions = ({ capturedImage, onClose, onSave }) => {
    const [manipulatedImage, setManipulatedImage] = useState(capturedImage);
    const [filter, setFilter] = useState(null);
    const [filteredUri, setFilteredUri] = useState(null);

  
    const handleApplyFilter = async (filter) => {
        //const dataUrl = await applyFilterOnWeb();
        // setManipulatedImage(dataUrl);
        console.log('filter in handleapplyfilter: ');
        console.log(filter);
        setFilter(filter);
        // await applyFilterOnWeb();
    };

    const handleImageLoad = async (filteredUri) => {
        setFilteredUri(filteredUri);
      };
    
    const filterStyle = () => {
        switch (filter) {
          case 'grayscale':
            return { filter: 'grayscale(100%)' };
          case 'blur':
            return { filter: "blur(5px)" };
          case 'brightness':
            return { filter: 'brightness(150%)' };
          case 'contrast':
            return { filter: 'contrast(150%)' };
          case 'hue':
            return { filter: 'hue-rotate(90deg)' };
          case 'saturation':
            return { filter: 'saturate(200%)' };
          default:
            return {};
        }
      };

    const style = { ...filterStyle(), width: 300, height: 300 };


    const handleSaveFilter = async () => {
    if (!filteredUri) return;

    if (Platform.OS === 'web') {
        const response = await fetch(filteredUri);
        const blob = await response.blob();
        FileSaver.saveAs(blob, "filtered-image.png");
        alert('Image saved successfully!');
    } else {
        const fileName = filteredUri.split('/').pop();
        const extension = fileName.split('.').pop();
        const newFileName = FileSystem.documentDirectory + 'photo.' + extension;

        try {
        await FileSystem.moveAsync({
            from: filteredUri,
            to: newFileName
        });

        await MediaLibrary.saveToLibraryAsync(newFileName);
        alert('Image saved successfully!');
        } catch (error) {
        console.log(error);
        alert('Error saving image.');
        }
    }
    };

    function dataUrlToBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeType = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeType });
    }

    const renderFilter = () => {
        if (Platform.OS === 'web') {
            return <WebImageFilter filter={filter} image={manipulatedImage} onImageLoad={handleImageLoad} />;
        }
    };

    const applyFilterOnWeb = (filter, manipulatedImage) => {
        return new Promise(async (resolve) => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
      
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.src = manipulatedImage;
      
          const filterStyle = getFilterStyle(filter);
      
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.filter = filterStyle;
            console.log('filterStyle: ');
            console.log(filterStyle);
            // ctx.drawImage(img, 0, 0, img.width, img.height);
            ctx.drawImage(img, 0, 100, 5000, 5000);
            const dataURL = canvas.toDataURL('image/jpeg');
      
            resolve(dataURL); // Return the filtered image data URL
          };
        });
      };

      const getFilterStyle = (filter) => {
        const filters = {
          grayscale: { name: 'grayscale' },
          blur: { name: 'blur', radius: 10 },
          brightness: { name: 'brightness', value: 0.5 },
          contrast: { name: 'contrast', value: 1.5 },
          hue: { name: 'hue', value: 90 },
          saturation: { name: 'saturation', value: 2 },
        };
      
        const filterObj = filters[filter];
        let filterStyle = '';
      
        switch (filterObj.name) {
          case 'grayscale':
            filterStyle = 'grayscale(1)';
            break;
          case 'blur':
            filterStyle = `blur(${filterObj.radius}px)`;
            break;
          case 'brightness':
            filterStyle = `brightness(${filterObj.value})`;
            break;
          case 'contrast':
            filterStyle = `contrast(${filterObj.value})`;
            break;
          case 'hue':
            filterStyle = `hue-rotate(${filterObj.value}deg)`;
            break;
          case 'saturation':
            filterStyle = `saturate(${filterObj.value})`;
            break;
        }
      
        return filterStyle;
      };
      


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveFilter}>
          <Text style={styles.saveButton}>Save!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filters}>
        <TouchableOpacity onPress={() => handleApplyFilter('grayscale')}>
          <Text style={styles.filter}>Grayscale </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleApplyFilter('blur')}>
          <Text style={styles.filter}>Blur </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleApplyFilter('brightness')}>
          <Text style={styles.filter}> Brightness</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleApplyFilter('contrast')}>
          <Text style={styles.filter}> Contrast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleApplyFilter('hue')}>
          <Text style={styles.filter}> Hue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleApplyFilter('saturation')}>
          <Text style={styles.filter}> Saturation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.preview}>{renderFilter()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007aff',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  filter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  preview: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default FilterOptions;