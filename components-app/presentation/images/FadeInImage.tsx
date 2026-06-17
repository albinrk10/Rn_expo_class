import {
    View,
    ActivityIndicator,
    StyleProp,
    ImageStyle,
    Animated
} from 'react-native'

import { useState } from 'react';
import { useAnimation } from '@/hooks/useAnimation';


interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const { animatedOpacity, fadeIn } = useAnimation();
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >{
                isLoading && (
                    <ActivityIndicator style={{ position: 'absolute' }}
                        color='gray'
                        size={30}

                    />
                )
            }

            <Animated.Image
                source={{ uri }}
                style={[style, { opacity: animatedOpacity }]}
                onLoadEnd={() => {
                    fadeIn({
                      //  duration: 2000,
                     });
                    setIsLoading(false);
                }}
            />
        </View>
    )
}

export default FadeInImage