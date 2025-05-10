import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function HomeScreen({ onTapCenter }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.avatar}
          />
          <Text style={styles.helloText}>Hello, Joshua</Text>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <Text style={styles.calendarMonth}>Mar 2025</Text>
          <TouchableOpacity>
            <Text style={styles.calendarArrow}>→</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.calendarDate}>Thur, 04 March 2025</Text>
        <View style={styles.calendarGrid}>
          {/* Days of week */}
          <View style={styles.calendarRow}>
            {['m','t','w','t','f','s','s'].map((d, i) => (
              <Text key={i} style={styles.calendarDay}>{d}</Text>
            ))}
          </View>
          {/* Dates */}
          {[0,1,2,3,4].map((row) => (
            <View key={row} style={styles.calendarRow}>
              {[1,2,3,4,5,6,7].map((col) => {
                const date = row * 7 + col;
                if (date > 31) return <Text key={col} style={styles.calendarDateNum}></Text>;
                const isSelected = date === 4;
                return (
                  <View key={col} style={[styles.calendarDateNum, isSelected && styles.selectedDate]}>
                    <Text style={[styles.calendarDateText, isSelected && styles.selectedDateText]}>{date < 10 ? `0${date}` : date}</Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/* Scheduled Lectures */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Scheduled Lectures</Text>
          <TouchableOpacity>
            <Text style={styles.sectionArrow}>→</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lectureRow}>
          <View style={styles.lectureCard}>
            <Text style={styles.lectureTitle}>CCN</Text>
            <Text style={styles.lectureTime}>10:45 - 11:45</Text>
            <TouchableOpacity>
              <Text style={styles.recordIn}>Record In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lectureCard}>
            <Text style={styles.lectureTitle}>FOA</Text>
            <Text style={styles.lectureTime}>10:45 - 11:45</Text>
            <TouchableOpacity>
              <Text style={styles.recordIn}>Record In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Your attendances */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Your attendances</Text>
          <TouchableOpacity>
            <Text style={styles.sectionArrow}>→</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attendanceCard}>
          <Text style={styles.attendanceTitle}>Upcoming Attendance</Text>
          <View style={styles.attendanceRow}>
            <Text style={styles.attendanceTime}>15:30pm</Text>
            <Text style={styles.attendanceIcon}>🗓️</Text>
          </View>
        </View>
        <View style={styles.attendanceCard}>
          <Text style={styles.attendanceTitle}>Upcoming Attendance</Text>
          <View style={styles.attendanceRow}>
            <Text style={styles.attendanceTime}>Tomorrow, 10:00am</Text>
            <Text style={styles.attendanceIcon}>🗓️</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation with Center Tap Button */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🏠</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navLabel}>Schedule</Text>
        </TouchableOpacity>
        {/* Center Tap Button */}
        <View style={styles.centerButtonWrapper}>
          <TouchableOpacity style={styles.centerButton} onPress={onTapCenter}>
            <Text style={styles.centerButtonIcon}>📥</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navLabel}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const PURPLE = '#7B3FF2';
const DARK = '#232323';
const LIGHT = '#fff';
const GRAY = '#eaeaea';
const SOFT = '#f7f5ff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SOFT,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
    borderWidth: 2,
    borderColor: PURPLE,
  },
  helloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: DARK,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: GRAY,
  },
  bellIcon: {
    fontSize: 22,
    color: PURPLE,
  },
  calendarContainer: {
    backgroundColor: DARK,
    borderRadius: 18,
    marginHorizontal: 20,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarMonth: {
    color: LIGHT,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calendarArrow: {
    color: PURPLE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarDate: {
    color: LIGHT,
    fontSize: 13,
    marginBottom: 8,
    marginTop: 2,
  },
  calendarGrid: {
    marginTop: 2,
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  calendarDay: {
    color: '#bbb',
    fontSize: 13,
    width: 28,
    textAlign: 'center',
  },
  calendarDateNum: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDateText: {
    color: LIGHT,
    fontSize: 13,
  },
  selectedDate: {
    backgroundColor: PURPLE,
  },
  selectedDateText: {
    color: LIGHT,
    fontWeight: 'bold',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 6,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: DARK,
  },
  sectionArrow: {
    color: PURPLE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  lectureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  lectureCard: {
    backgroundColor: DARK,
    borderRadius: 16,
    padding: 16,
    width: '48%',
    marginBottom: 8,
  },
  lectureTitle: {
    color: LIGHT,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  lectureTime: {
    color: '#bbb',
    fontSize: 13,
    marginBottom: 8,
  },
  recordIn: {
    color: PURPLE,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
  },
  attendanceCard: {
    backgroundColor: DARK,
    borderRadius: 14,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 14,
  },
  attendanceTitle: {
    color: LIGHT,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  attendanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendanceTime: {
    color: LIGHT,
    fontSize: 14,
  },
  attendanceIcon: {
    color: PURPLE,
    fontSize: 18,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: LIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 6,
    paddingTop: 6,
    height: 65,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    zIndex: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
  },
  navIcon: {
    fontSize: 22,
    color: '#bbb',
  },
  navLabel: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 2,
  },
  activeNavIcon: {
    color: PURPLE,
  },
  activeNavLabel: {
    color: PURPLE,
    fontWeight: 'bold',
  },
  centerButtonWrapper: {
    width: 60,
    alignItems: 'center',
  },
  centerButton: {
    position: 'absolute',
    bottom: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: SOFT,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 20,
  },
  centerButtonIcon: {
    color: LIGHT,
    fontSize: 28,
    fontWeight: 'bold',
  },
}); 