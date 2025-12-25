import React, { ReactElement } from "react"
import { View } from "react-native"
import { AppViewProps } from "."

const Container = ({
 maxWidth,
 style,
 children,
 ...props
}: AppViewProps & { maxWidth?: number }): ReactElement => {
 return (
   <View
     style={[
       {
         width: "100%",
         maxWidth: maxWidth || 560,
         marginVertical: 0,
         marginHorizontal: "auto",
         paddingVertical: 24,
         paddingHorizontal: 24,
       },
       style,
     ]}
     {...props}
   >
     {children}
   </View>
 )
}


export default Container

