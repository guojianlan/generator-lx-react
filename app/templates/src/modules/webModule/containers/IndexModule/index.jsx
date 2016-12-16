import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { increase, decrease } from '../../actions/count'
import style from './index.scss'
class Index extends React.Component{
	render(){
		const { number,increase ,decrease} = this.props;
		return (
				<div >
					<div className={style.hehe}>
						<div className={style.haha} id={style.xixi}>1231223122231322sdadada11231233121212312312322123123132</div>
						<div>123123</div>
					</div>
					<div><Link to={`/static/react/register`} activeClassName="active">register</Link></div>
					<div onClick={() => increase(1)}>increase</div>
					<div onClick={() => decrease(1)}>decrease</div>
					{number}
				</div>
			)
	}
}
export default connect(
	state => ({ number: state.count.number }),
	{increase,decrease}
)(Index)