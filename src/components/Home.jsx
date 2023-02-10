import React from 'react'
import { Box, Image,Text } from '@chakra-ui/react'
import btcSrc from "../assets/Bitcoin 1.png"
import {motion} from "framer-motion"
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.200"} w={"full"} h={"85vh"}>
      <motion.div
      style={{
        height:"80vh",
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 1,
        repeat:Infinity,
        repeatType:"reverse"
      }}>

      <Image  w={"full"}
       h={"full"} 
      
       objectFit={"contain"} 
       src={btcSrc} 
      

       />
     
      </motion.div>
      <Text 
      fontSize={"7xl"} 
      fontFamily={"Permanent Marker"}
      textAlign={"center"}
      fontWeight={"thick"}
      color={"black"}
      mt={"-20"}
      >Ycrypto</Text>
    </Box>
  )
}

export default Home
