import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {

  const onContactMe = () => {
    Linking.openURL("mailto:vadim@notjustdev.dev")
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: 'red' }}>
        <View style={{ backgroundColor: 'palegreen', height: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 100 }}>Title</Text>
          <Text style={{ marginTop: 'auto' }}>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
  // return (
  //   <ScrollView>
  //     <View style={styles.container}>
  //       <Image source={{ uri: "https://cdn.dribbble.com/userupload/10355575/file/original-dbb68b3c65f6d9e6a237990674d4f286.gif" }}
  //         style={{ width: "100%", aspectRatio: 16 / 9 }}
  //       />
  //       <Image source={require('./assets/vadim.png')} style={{ width: 100, height: 100, borderRadius: 100, borderColor: 'white', marginTop: -75 }} />
  //       <Text style={{ fontSize: 30, fontWeight: "bold" }}>Michael</Text>
  //       <Text>Notjust Dev</Text>
  //       <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
  //         <FontAwesome6 name="github" size={24} color="black" />
  //         <FontAwesome6 name="x-twitter" size={24} color="black" />
  //         <FontAwesome6 name="at" size={24} color="black" />
  //       </View>
  //       <Button title='Contact me' onPress={onContactMe} />
  //       <Text style={{ padding: 22, fontSize: 16, lineHeight: 20 }}>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

  //         Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

  //         Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
  //       </Text>
  //       <StatusBar style="auto" />
  //     </View>
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
