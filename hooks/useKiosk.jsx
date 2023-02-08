import KioskContext from '@/context/KioskProvider';
import { useContext } from 'react';

const useKiosk = () => useContext(KioskContext);

export default useKiosk;
