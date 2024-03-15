import Image from "next/image";
import { UIProvider, Flex, VStack, Text, Spacer, Button } from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <UIProvider >
        <Flex>
          <VStack className="main">
            <Text className="title-text text">
              Ido-Bata
            </Text>
            <VStack className="subtitle">
              <Text className="subtitle-text">
                『時間が立つと消える掲示板』
              </Text>
              <Text className="subtitle-text">
                限られた時間の中で､
              </Text>
              <Text className="subtitle-text">
                何気ない会話をしませんか｡
              </Text>
              <Text className="subtitle-text">
                『井戸端会議』 のように｡
              </Text>
            </VStack>
          </VStack>
          <VStack>
            <Image src="/idobata_logo.jpg" width={800} height={800} alt="logo"/>
            <Flex>
              <Spacer />
              <Link href="/idoList">
                <Button colorScheme="primary" variant="solid" size='lg' style={{ marginRight: '250px', scale: "1.5" }}>
                  はじめる
                </Button>
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </UIProvider>
    </main>
  );
}
