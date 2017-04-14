import { connect } from 'react-redux'
import TeslaWheels from '../components/TeslaWheels/TeslaWheels'
import { changeWheel } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.config.wheels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeWheels: (value) => {
      dispatch(changeWheel(value))
    }
  }
}

const TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels)

export default TeslaWheelsContainer
