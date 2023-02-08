const { default: KioskContext } = require('@/context/KioskProvider');
const { useContext } = require('react');

const useKiosk = () => useContext(KioskContext);

export default useKiosk;
