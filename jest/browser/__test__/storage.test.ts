import storage from '../ts/storage'

test('Test localStorage', () => {
    storage.set('name', 'Nancy')
    expect(storage.get('name')).toBe('Nancy')
})
