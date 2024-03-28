# React Hooks
Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React  yang lain tanpa perlu menulis sebuah kelas.
## Motivasi 
- Kesulitan untuk menggunakan kembali stateful logic antar komponen
- Komponen kompleks menjadi sulit untuk dimengerti
- Kelas membingungkan manusia dan mesin
## Hooks pada react
### Hooks dasar
- useState
- useEffect
- useContext
### Hooks tambahan
- useReducer
- useCallback
- useMemo
- useref
- useImperativeHandle
- useLayoutEffect
- useDebugValue
## Aturan pada hooks
### Hanya panggil hooks di tingkat atas
jangan memanggil hooks dari dalam loops, conditions, atau nested functions
### Hanya panggil hooks dari fungsi-fungsi react
jangan memanggil hooks dari fungsi-fungsi javascript biasa
kita dapat :
- memanggil hooks dari komponen-komponen fungsi react
- memanggil hooks dari custom hooks

# Implementasi useState & useEffect di Component
## Menggunakan useState
## Menggunakan useEffect 
- Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount = useEffect
- Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan

# Membuat Custom Hooks
## Custom Hooks
Membuat Hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi