import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f1f5f9', // slate-100
  },
  appHeader: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0', // slate-200
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b', // slate-800
  },
  contentArea: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 24,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#334155', // slate-700
    textAlign: 'center',
    marginBottom: 8,
  },
  screenSubtitle: {
    fontSize: 16,
    color: '#64748b', // slate-500
    textAlign: 'center',
    marginBottom: 24,
  },
  typeSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1', // slate-300
    borderRadius: 8,
  },
  typeButtonSelected: {
    backgroundColor: '#4f46e5', // indigo-600
    borderColor: '#4f46e5',
  },
  typeButtonText: {
    fontWeight: '600',
    color: '#334155', // slate-700
    textAlign: 'center',
  },
  typeButtonTextSelected: {
    color: '#ffffff',
  },
  suggestionBox: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  suggestionText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f46e5', // indigo-600
  },
  mainButton: {
    width: '100%',
    backgroundColor: '#4f46e5', // indigo-600
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  mainButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  libraryControls: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    fontSize: 16,
    marginBottom: 12,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
  },
  sortButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e2e8f0',
    marginHorizontal: 4,
  },
  sortButtonActive: {
    backgroundColor: '#4f46e5',
  },
  sortButtonText: {
    fontWeight: '600',
    color: '#475569',
  },
  sortButtonTextActive: {
    color: '#ffffff',
  },
  libraryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  petCard: {
    width: '50%',
    padding: 8,
  },
  petCardImage: {
    width: '100%',
    height: 130,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  petCardInfo: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: -4,
  },
  petCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  petCardName: {
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
  },
  petCardIcon: {
    fontSize: 20,
  },
  petCardMemo: {
    fontSize: 12,
    color: '#64748b',
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#334155',
    marginTop: 16,
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569', // slate-600
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1', // slate-300
    borderRadius: 8,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  photoUploader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  photoPreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  addPhotoButtonText: {
    color: '#4f46e5',
    fontWeight: '600',
  },
  imagePickerButton: {
    backgroundColor: '#e0e7ff', // indigo-100
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  imagePickerButtonText: {
    color: '#4f46e5', // indigo-600
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedImagePreview: {
    width: 150,
    height: 150,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 16,
  },
  navBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Adjust for iPhone safe area
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#64748b',
  },
  navIconActive: {
    color: '#4f46e5',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748b',
  },
  navTextActive: {
    color: '#4f46e5',
  },
  navAddButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#f1f5f9',
  },
  navAddButtonText: {
    color: '#ffffff',
    fontSize: 36,
    lineHeight: 40,
  },
});

export default styles;