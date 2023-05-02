// JavaScript source code
import React from 'react';
import { Text, View, Image } from 'react-native';
import { formatRelative } from 'date-fns';

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
}) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <View style={{
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            marginRight: 10,
            minWidth: 200,
            margin: 5,
          }}>
            {photoURL &&
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: photoURL }}
                  style={{ width: 20, height: 20, marginRight: 5 }}
                />
                {displayName &&
                  <Text style={{ margin: 0 }}>{displayName}</Text>
                }
              </View>
            }
      
            <Text style={{ margin: 0, color: 'red', flex:1, marginRight: 10 }}>{text}</Text>
      
            {createdAt && createdAt.seconds &&
              <Text style={{ fontSize: 10, color: 'grey', marginLeft: '0.5em' }}>
                {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
              </Text>
            }
          </View>
        </View>
      );
      
      
};

export default Message;
