import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) => {
	const {textStyle,vueStyle} = styles;
   return (
   	<View style={vueStyle}>	
   		<Text style={textStyle}>{props.headerText} </Text>
   	</View>
   	);
};

const styles = StyleSheet.create({
	vueStyle:{
       	backgroundColor:'#f8f8f8',
       	justifyContent:'center',
       	alignItems:'center',
       	height:60,
       	paddingTop:15,
       	shadowColor:'#000',
       	shadowOffset:{width:0,height:2},
       	shadowOpacity:0.2,
       	elevation: 2,
       	position:'relative',
	},
	textStyle:{
		fontSize:20,
		color:'red'
	}
})
export {Header};