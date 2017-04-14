import { connect } from 'react-redux'
import TeslaCounter from '../components/TeslaCounter/TeslaCounter'
import counterDefaultVal from '../constants/counterDefaultVal'
import { temperatureUp, temperatureDown } from '../actions'

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.temperature,
    initValues: counterDefaultVal.temperature
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
        dispatch(temperatureUp(value))
    },
    decrement: (value) => {
        dispatch(temperatureDown(value))
    }
  }
}

const TeslaTemperatureCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)

export default TeslaTemperatureCounterContainer
