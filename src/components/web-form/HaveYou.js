import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class HaveYou extends Component {
    onClick = (data) => {
      this.props.nextPage();
      this.props.setData(data);
    }

    render() {
      const values = [
        'Yes',
        'No',
        'Not sure'
      ];

      const data = this.props.form.data.haveYou;
      const style = {borderColor: '#ef6b43', color: '#ef6b43'};

      const items = values.map((value, index) => {
        if(data === value) return <li key={index}><button type="button" onClick={(e) => this.onClick({haveYou: value})} style={style}>{value}</button></li>;
        else return <li key={index}><button type="button" onClick={(e) => this.onClick({haveYou: value})}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>Have you or your partner ever had a miscarriage?</h1>
        <p className="header-gap"></p>
        <ul className="app-quiz__answers">
            {items}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {setData})(HaveYou);