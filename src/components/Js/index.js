
import Vue from 'vue';
import MessageBox from './messageBox'
export var messageBox = (function(){
   var defaults = {
       // 默认值
       title:'',
       content: '',
       cancel:'',
       ok:'',
       handleCancel: null,
       handleOk: null
   };
   return function(opts){
       // 配置参数
       for(let attr in defaults){
            defaults[attr] = opts[attr];
       }

   }
});
