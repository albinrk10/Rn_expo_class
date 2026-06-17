import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const PullToRefreshScreen = () => {


  const primaryColor =  useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    dark: 'black',light: 'white'
  }, 'background');

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };



  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange','green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >

      <ThemedView margin>
        <ThemedText>Pull To Refresh</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
