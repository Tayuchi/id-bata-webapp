import { Flex, UIProvider, VStack, Text, Center } from '@yamada-ui/react'
import React from 'react'

const idoList = () => {
  return (
    <div>
      <UIProvider >
          <Flex>  
            <VStack className="main">
              <Center>
                <Text className="subtitle-text">
                  井戸一覧
                </Text>
                
              </Center>
            </VStack>
          </Flex>
      </UIProvider>
    </div>
  )
}

export default idoList