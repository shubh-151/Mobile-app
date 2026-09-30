import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import {
  Layout,
  Card,
  Text,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingsScreen';
import MtfScreen from './MtfScreen';

const Header = () => (
  <Layout style={styles.cardHeader}>
    <Text category="h6">Card Title</Text>
    <Text category="s1">Subtitle</Text>
  </Layout>
);

const Footer = () => (
  <Layout style={styles.cardFooter}>
    <Text category="c1">Footer content</Text>
  </Layout>
);

const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderScreen = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <>
            <Card
              style={styles.card}
              header={Header}
              footer={Footer}
              onPress={() => console.log('Card pressed')}
            >
              <Text>This is the card body content.</Text>
            </Card>

            <Card
              style={styles.card}
              header={Header}
              footer={Footer}
              onPress={() => console.log('Card pressed')}
            >
              <Text>This is the card body content.</Text>
            </Card>

            <Card
              style={styles.card}
              header={Header}
              footer={Footer}
              onPress={() => console.log('Card pressed')}
            >
              <Text>This is the card body content.</Text>
            </Card>

            <Card
              style={styles.card}
              header={Header}
              footer={Footer}
              onPress={() => console.log('Card pressed')}
            >
              <Text>This is the card body content.</Text>
            </Card>
          </>
        );

      case 1:
        return <ProfileScreen />;

      case 2:
        return <SettingScreen />;

      case 3:
        return <MtfScreen />;

      default:
        return null;
    }
  };

  return (
    <Layout style={styles.container} level="4">
      <Layout style={styles.content}>{renderScreen()}</Layout>

      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        appearance="noIndicator"
        style={styles.navtab}
      >
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Profile" />
        <BottomNavigationTab title="Setting" />
        <BottomNavigationTab title="MTF" />
      </BottomNavigation>
      
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  content: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#383B7D',
  },

  card: {
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 15,
    borderColor: '#383B7D',
  },

  navtab: {
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 15,
    borderColor: '#383B7D',
  },

  cardHeader: {
    padding: 8,
  },

  cardFooter: {
    padding: 8,
  },
});

export default HomeScreen;
