import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    marginTop: 48,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  eventDate: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 56,
    marginRight: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    borderRadius: 5,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#31CF67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
})
