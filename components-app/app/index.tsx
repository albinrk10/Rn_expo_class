import ThemedView from '@/presentation/shared/ThemedView'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import MenuItem from '@/presentation/menu/MenuItem'
import { View } from 'react-native'

const ComponentsApp = () => {
  // <Link href={router.name.split('/')[0] as Href}>{router.title}</Link>
  return (
    // <View>
    //   <Text>ComponentsApp</Text>
    //   <Link href="/animation-101">Hola Mundo</Link>
    // </View>
    <ThemedView margin>
      {animationMenuRoutes.map((router, index) => (
        <MenuItem
          key={router.title}
          title={router.title}
          icon={router.icon}
          name={router.name}
          isFirst={index === 0}
          isLast={index == animationMenuRoutes.length - 1}
        ></MenuItem>

      ))}

      <View className='my-5' />

      {uiMenuRoutes.map((router, index) => (
        <MenuItem
          key={router.title}
          title={router.title}
          icon={router.icon}
          name={router.name}
          isFirst={index === 0}
          isLast={index == uiMenuRoutes.length - 1}
        ></MenuItem>

      ))}

      <View className='my-5' />
      {menuRoutes.map((router, index) => (
        <MenuItem
          key={router.title}
          title={router.title}
          icon={router.icon}
          name={router.name}
          isFirst={index === 0}
          isLast={index == menuRoutes.length - 1}
        ></MenuItem>

      ))}
    </ThemedView>
  )
}

export default ComponentsApp