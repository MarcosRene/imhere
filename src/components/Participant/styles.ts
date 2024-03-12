import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#1F1C25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#E23C44',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
})
