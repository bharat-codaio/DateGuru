/*!CK:3632578813!*//*1418018451,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XVvVW"]); }

__d("IntlPostTranslation",["AsyncRequest","cx","DOM","Event","fbt","highlight","LoadingIndicator.react","React","XIntlPostTranslationControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(r,s){var t=i.create('div',{'class':"_5yn0"},s||"No translation available");i.replace(r,t);if(s)l(t);}var q={bindListener:function(r,s){j.listen(r,'click',function(){n.render(n.createElement(m,{size:"small",color:"white"}),r);var t=new o().setString('ftid',s).getURI();new g().setURI(t).setHandler(function(u){var v=u.getPayload();p(r,v&&v.text);}).setErrorHandler(function(){p(r,null);}).send();});}};e.exports=q;},null);