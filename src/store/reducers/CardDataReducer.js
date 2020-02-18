import { SHOW_LIST_DATA } from "../actions/types";

const initialState = {
    list: [
        {
            icon: 'ios-person',
            type: 'Profesional',
            data: 'Xavier Frías Garrido'
        },
        {
            icon: 'calendar',
            type: 'Fecha de la cita',
            data: 'Sábado, 21 de diciembre de 2019, 11:00'
        },
        {
            icon: 'pin',
            type: 'Instalación',
            data: 'Carrer de Baldomer Solà, 80, 08912, Badalona'
        }
    ]
    
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SHOW_LIST_DATA:
      return {
        ...state
        
      };

    default:
      return state;
  }

}