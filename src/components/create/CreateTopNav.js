import { StackNavigator } from 'react-navigation';
import SeleccionarTipo from './SeleccionarTipo';
import CrearBarajaForm from './CrearBarajaForm';



const AppNavigation = StackNavigator({
  seleccionar: { screen: SeleccionarTipo },
  formulario: { screen: CrearBarajaForm }
});

export default AppNavigation;