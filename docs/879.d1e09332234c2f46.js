"use strict";var k=Math.pow;(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[879],{3879:(G,C,w)=>{w.r(C),w.d(C,{TGraphPainter:()=>P});var b=w(1773),A=w(2912),$=w(5611),B=w(2454),Y=w(9608),O=w(1671),S=w(9994),z=w(7222);const F=(0,b.BIT)(18);class P extends B.tK{constructor(t,i){super(t,i),this.axes_draw=!1,this.bins=null,this.xmin=this.ymin=this.xmax=this.ymax=0,this.wheel_zoomy=!0,this.is_bent="TGraphBentErrors"==i._typename,this.has_errors="TGraphErrors"==i._typename||"TGraphMultiErrors"==i._typename||"TGraphAsymmErrors"==i._typename||this.is_bent||i._typename.match(/^RooHist/)}redraw(){let t=Promise.resolve(!0);if(this.$redraw_hist){delete this.$redraw_hist;let i=this.getMainPainter();null!=i&&i.$secondary&&this.axes_draw&&(t=i.redraw())}return t.then(()=>this.drawGraph())}cleanup(){delete this.interactive_bin,delete this.bins,super.cleanup()}get_gme(){let t=this.getObject();return"TGraphMultiErrors"==(null==t?void 0:t._typename)?t:null}decodeOptions(t,i){"string"==typeof t&&0==t.indexOf("same ")&&(t=t.slice(5));let s=this.getObject(),r=!!this.get_gme(),l=[],h=i?!!this.getMainPainter():!this.axes_draw;this.options||(this.options={});const c=(e,a)=>{Object.assign(a,{Line:0,Curve:0,Rect:0,Mark:0,Bar:0,OutRange:0,EF:0,Fill:0,MainError:1,Ends:1,ScaleErrX:1}),r&&e.check("S=",!0)&&(a.ScaleErrX=e.partAsFloat()),e.check("L")&&(a.Line=1),e.check("F")&&(a.Fill=1),e.check("CC")&&(a.Curve=2),e.check("C")&&(a.Curve=1),e.check("*")&&(a.Mark=103),e.check("P0")&&(a.Mark=104),e.check("P")&&(a.Mark=1),e.check("B")&&(a.Bar=1,a.Errors=0),e.check("Z")&&(a.Errors=1,a.Ends=0),e.check("||")&&(a.Errors=1,a.MainError=0,a.Ends=1),e.check("[]")&&(a.Errors=1,a.MainError=0,a.Ends=2),e.check("|>")&&(a.Errors=1,a.Ends=3),e.check(">")&&(a.Errors=1,a.Ends=4),e.check("0")&&(a.Mark=1,a.Errors=1,a.OutRange=1),e.check("1")&&1==a.Bar&&(a.Bar=2),e.check("2")&&(a.Rect=1,a.Errors=0),e.check("3")&&(a.EF=1,a.Errors=0),e.check("4")&&(a.EF=2,a.Errors=0),e.check("5")&&(a.Rect=2,a.Errors=0),e.check("X")&&(a.Errors=0)};Object.assign(this.options,{Axis:"",NoOpt:0,PadStats:!1,original:t,second_x:!1,second_y:!1,individual_styles:!1}),r&&t&&(t.indexOf(";")>0?(l=t.split(";"),t=l.shift()):t.indexOf("_")>0&&(l=t.split("_"),t=l.shift()));let n=this.options,o=new $.pc(t);n.PadStats=o.check("USE_PAD_STATS");let m="";if(["USE_PAD_TITLE","LOGXY","LOGX","LOGY","LOGZ","GRIDXY","GRIDX","GRIDY","TICKXY","TICKX","TICKY"].forEach(e=>{o.check(e)&&(m+=";"+e)}),o.check("XAXIS_",!0)&&(m+=";XAXIS_"+o.part),o.check("YAXIS_",!0)&&(m+=";YAXIS_"+o.part),o.empty()&&(n.original=h?"lp":"alp",o=new $.pc(n.original)),o.check("NOOPT")&&(n.NoOpt=1),o.check("POS3D_",!0)&&(n.pos3d=o.partAsInt()-.5),n._pfc=o.check("PFC"),n._plc=o.check("PLC"),n._pmc=o.check("PMC"),o.check("A")&&(n.Axis=o.check("I")?"A":"AXIS"),o.check("X+")&&(n.Axis+="X+",n.second_x=h),o.check("Y+")&&(n.Axis+="Y+",n.second_y=h),o.check("RX")&&(n.Axis+="RX"),o.check("RY")&&(n.Axis+="RY"),r&&(n.blocks=[],n.skip_errors_x0=n.skip_errors_y0=!1,o.check("X0")&&(n.skip_errors_x0=!0),o.check("Y0")&&(n.skip_errors_y0=!0)),c(o,n),r&&o.check("S")&&(n.individual_styles=!0),void 0===n.Errors&&(n.Errors=!this.has_errors||r&&l.length?0:1),1==n.Mark&&1==s.fMarkerStyle&&(n.Mark=101),n.Line+n.Fill+n.Curve+n.Mark+n.Bar+n.EF+n.Rect+n.Errors==0&&o.empty()&&(n.Line=1),"TGraphErrors"==s._typename){let e=s.fEX.length,a=0;for(let x=0;x<e;++x)a=Math.max(a,s.fEX[x],s.fEY[x]);a<1e-100&&(n.Errors=0)}if(n.Axis)n.Axis.indexOf("A")<0&&(n.Axis="AXIS,"+n.Axis);else{var u;let e=this.getPadPainter(),a=null==e?void 0:e.getRootPad(!0);(!a||(null==a||null===(u=a.fPrimitives)||void 0===u?void 0:u.arr[0])===s)&&(n.Axis="AXIS")}n.Axis+=m;for(let e=0;e<l.length;++e){let x={};c(new $.pc(l[e]),x),x.skip_errors_x0=n.skip_errors_x0,x.skip_errors_y0=n.skip_errors_y0,n.blocks.push(x)}}extractGmeErrors(t){if(!this.bins)return;let i=this.getObject();this.bins.forEach(s=>{s.eylow=i.fEyL[t][s.indx],s.eyhigh=i.fEyH[t][s.indx]})}createBins(){let t=this.getObject();if(!t)return;let i=0,s=t.fNpoints;"TCutG"===t._typename&&s>3&&s--,"TGraphErrors"==t._typename?i=1:"TGraphMultiErrors"==t._typename?i=2:("TGraphAsymmErrors"==t._typename||"TGraphBentErrors"==t._typename||t._typename.match(/^RooHist/))&&(i=3),this.bins=new Array(s);for(let r=0;r<s;++r){let l=this.bins[r]={x:t.fX[r],y:t.fY[r],indx:r};switch(i){case 1:l.exlow=l.exhigh=t.fEX[r],l.eylow=l.eyhigh=t.fEY[r];break;case 2:l.exlow=t.fExL[r],l.exhigh=t.fExH[r],l.eylow=t.fEyL[0][r],l.eyhigh=t.fEyH[0][r];break;case 3:l.exlow=t.fEXlow[r],l.exhigh=t.fEXhigh[r],l.eylow=t.fEYlow[r],l.eyhigh=t.fEYhigh[r]}0===r&&(this.xmin=this.xmax=l.x,this.ymin=this.ymax=l.y),i>0?(this.xmin=Math.min(this.xmin,l.x-l.exlow,l.x+l.exhigh),this.xmax=Math.max(this.xmax,l.x-l.exlow,l.x+l.exhigh),this.ymin=Math.min(this.ymin,l.y-l.eylow,l.y+l.eyhigh),this.ymax=Math.max(this.ymax,l.y-l.eylow,l.y+l.eyhigh)):(this.xmin=Math.min(this.xmin,l.x),this.xmax=Math.max(this.xmax,l.x),this.ymin=Math.min(this.ymin,l.y),this.ymax=Math.max(this.ymax,l.y))}}createHistogram(t,i,s){let r=this.xmin,l=this.xmax,h=this.ymin,c=this.ymax;r>=l&&(l=r+1),h>=c&&(c=h+1);let n=.1*(l-r),o=.1*(c-h),m=r-n,f=l+n,u=h-o,e=c+o;m<0&&r>=0&&(m=.9*r),f>0&&l<=0&&(f=0);let a=this.getObject();if(-1111!=a.fMinimum&&(u=h=a.fMinimum),-1111!=a.fMaximum&&(e=a.fMaximum),u<0&&h>=0&&(u=.9*h),!i&&!s&&(i=s=!0),!(t=a.fHistogram)){(t=a.fHistogram=(0,b.createHistogram)("TH1F",100)).fName=a.fName+"_h";let x=(0,b.BIT)(9);t.fBits=t.fBits|x,this._own_histogram=!0}return t.fTitle=a.fTitle,i&&(t.fXaxis.fXmin=m,t.fXaxis.fXmax=f),s&&(t.fYaxis.fXmin=u,t.fYaxis.fXmax=e,t.fMinimum=u,t.fMaximum=e),t}unzoomUserRange(t,i){var s;let r=this.getObject();if(this._own_histogram||!r)return!1;let l=r.fHistogram;return i=i&&l&&(l.fYaxis.fXmin>this.ymin||l.fYaxis.fXmax<this.ymax),!(!(t=t&&l&&(l.fXaxis.fXmin>this.xmin||l.fXaxis.fXmax<this.xmax))&&!i||(this.createHistogram(null,t,i),null===(s=this.getMainPainter())||void 0===s||s.extractAxesProperties(1),0))}canOptimize(){return b.settings.OptimizeDraw>0&&!this.options.NoOpt}optimizeBins(t,i){if(this.bins.length<30&&!i)return this.bins;let s=null;if("function"==typeof i)for(let h=0;h<this.bins.length;++h)i(this.bins[h],h)?s||(s=0==h?[]:this.bins.slice(0,h)):s&&s.push(this.bins[h]);if(s||(s=this.bins),t||(t=5e5),s.length<t||!this.canOptimize())return s;let r=Math.floor(s.length/t);r<2&&(r=2);let l=[];for(let h=0;h<s.length;h+=r)l.push(s[h]);return l}getTooltips(t){let i=this.getFramePainter(),s=[],r=null==i?void 0:i.getGrFuncs(this.options.second_x,this.options.second_y),l=this.get_gme();if(s.push(this.getObjectHint()),t&&r)if(void 0!==t.indx&&s.push("p = "+t.indx),s.push("x = "+r.axisAsText("x",t.x)),s.push("y = "+r.axisAsText("y",t.y)),l?s.push("error x = -"+r.axisAsText("x",l.fExL[t.indx])+"/+"+r.axisAsText("x",l.fExH[t.indx])):this.options.Errors&&"normal"==r.x_handle.kind&&(t.exlow||t.exhigh)&&s.push("error x = -"+r.axisAsText("x",t.exlow)+"/+"+r.axisAsText("x",t.exhigh)),l)for(let h=0;h<l.fNYErrors;++h)s.push(`error y${h} = -${r.axisAsText("y",l.fEyL[h][t.indx])}/+${r.axisAsText("y",l.fEyH[h][t.indx])}`);else(this.options.Errors||this.options.EF>0)&&"normal"==r.y_handle.kind&&(t.eylow||t.eyhigh)&&s.push("error y = -"+r.axisAsText("y",t.eylow)+"/+"+r.axisAsText("y",t.eyhigh));return s}get_main(){let t=this.getFramePainter();if(t&&t.grx&&t.gry)return t;let i=this.getPadPainter(),s=(null==i?void 0:i.getPadRect())||{width:800,height:600};return t={pad_layer:!0,pad:null==i?void 0:i.getRootPad(!0),pw:s.width,ph:s.height,getFrameWidth(){return this.pw},getFrameHeight(){return this.ph},grx(r){return(r=this.pad.fLogx?r>0?Math.log10(r):this.pad.fUxmin:(r-this.pad.fX1)/(this.pad.fX2-this.pad.fX1))*this.pw},gry(r){return(1-(r=this.pad.fLogy?r>0?Math.log10(r):this.pad.fUymin:(r-this.pad.fY1)/(this.pad.fY2-this.pad.fY1)))*this.ph},getGrFuncs(){return this}},t.pad?t:null}appendExclusion(t,i,s,r){let l=[];for(let c=s.length-1;c>=0;--c){let n=s[c],o=Math.sqrt(k(n.dgrx,2)+k(n.dgry,2));n.grx+=r*n.dgry/o,n.gry-=r*n.dgrx/o,l.push(n)}let h=(0,$.Cq)(t?"Lbezier":"Lline",l);this.draw_g.append("svg:path").attr("d",i.path+h.path+"Z").call(this.fillatt.func).style("opacity",.75)}drawBins(t,i,s,r,l,h,c,n){let o=this.getObject(),m=0,f=null;if(n&&h.excl_side&&(m=h.excl_width,h.width>0&&!i.Line&&!i.Curve&&(i.Line=1)),i.EF){f=this.optimizeBins(i.EF>1?2e4:0);for(let d=0;d<f.length;++d){let g=f[d];g.grx=t.grx(g.x),g.gry=t.gry(g.y-g.eylow)}let e=(0,$.Cq)(i.EF>1?"bezier":"line",f),a=[];for(let d=f.length-1;d>=0;--d){let g=f[d];g.gry=t.gry(g.y+g.eyhigh),a.push(g)}let x=(0,$.Cq)(i.EF>1?"Lbezier":"Lline",a);s.append("svg:path").attr("d",e.path+x.path+"Z").call(c.func),n&&(this.draw_kind="lines")}if(i.Line||i.Fill){let e="";"TCutG"==o._typename&&(i.Fill=1),i.Fill&&(e="Z",m=0),f||(f=this.optimizeBins(0));for(let g=0;g<f.length;++g){let _=f[g];_.grx=t.grx(_.x),_.gry=t.gry(_.y)}let a="line";m&&(a+="calc");let x=(0,$.Cq)(a,f);m&&this.appendExclusion(!1,x,f,m);let d=s.append("svg:path").attr("d",x.path+e);i.Line&&d.call(h.func),i.Fill?d.call(c.func):d.style("fill","none"),n&&(this.draw_kind="lines")}if(i.Curve){let e=f;if("lines"!=this.draw_kind||!e||1==i.Curve&&e.length>2e4){e=this.optimizeBins(1==i.Curve?2e4:0);for(let d=0;d<e.length;++d){let g=e[d];g.grx=t.grx(g.x),g.gry=t.gry(g.y)}}let a="bezier";m&&(a+="calc");let x=(0,$.Cq)(a,e);m&&this.appendExclusion(!0,x,e,m),s.append("svg:path").attr("d",x.path).call(h.func).style("fill","none"),n&&(this.draw_kind="lines")}let u=null;if((i.Errors||i.Rect||i.Bar)&&(f=this.optimizeBins(5e3,(e,a)=>{let x=t.grx(e.x);if(!i.Bar&&(x<0||x>r))return!0;let d=t.gry(e.y);return!i.Bar&&!i.OutRange&&(d<0||d>l)||(e.grx1=Math.round(x),e.gry1=Math.round(d),this.has_errors&&(e.grx0=Math.round(t.grx(e.x-i.ScaleErrX*e.exlow)-x),e.grx2=Math.round(t.grx(e.x+i.ScaleErrX*e.exhigh)-x),e.gry0=Math.round(t.gry(e.y-e.eylow)-d),e.gry2=Math.round(t.gry(e.y+e.eyhigh)-d),this.is_bent?(e.grdx0=Math.round(t.gry(e.y+o.fEXlowd[a])-d),e.grdx2=Math.round(t.gry(e.y+o.fEXhighd[a])-d),e.grdy0=Math.round(t.grx(e.x+o.fEYlowd[a])-x),e.grdy2=Math.round(t.grx(e.x+o.fEYhighd[a])-x)):e.grdx0=e.grdx2=e.grdy0=e.grdy2=0),!1)}),n&&(this.draw_kind="nodes"),u=s.selectAll(".grpoint").data(f).enter().append("svg:g").attr("class","grpoint").attr("transform",e=>`translate(${e.grx1},${e.gry1})`)),i.Bar){for(let x=1;x<f.length-1;++x)f[x].width=Math.max(2,(f[x+1].grx1-f[x-1].grx1)/2-2);switch(f.length){case 0:break;case 1:f[0].width=r/4;break;case 2:f[0].width=f[1].width=(f[1].grx1-f[0].grx1)/2;break;default:f[0].width=f[1].width,f[f.length-1].width=f[f.length-2].width}let e=Math.round(t.gry(0)),a=c;if(n){let x=this.getFramePainter(),d=null==x||!x.fillatt||null!=x&&x.fillatt.empty()?-1:x.fillatt.getFillColor();d===c.getFillColor()&&(a=new S.Y({color:"white"==d?1:0,pattern:1001}))}u.append("svg:path").attr("d",x=>{x.bar=!0;let d=Math.round(-x.width/2),g=Math.round(x.width);return`M${d},${1!==i.Bar?0:x.gry1>e?e-x.gry1:0}h${g}v${1!==i.Bar?l>x.gry1?l-x.gry1:0:Math.abs(e-x.gry1)}h${-g}z`}).call(a.func)}if(i.Rect&&u.filter(e=>e.exlow>0&&e.exhigh>0&&e.eylow>0&&e.eyhigh>0).append("svg:path").attr("d",e=>(e.rect=!0,`M${e.grx0},${e.gry0}H${e.grx2}V${e.gry2}H${e.grx0}Z`)).call(c.func).call(2===i.Rect?h.func:()=>{}),this.error_size=0,i.Errors){let e=h.width+b.gStyle.fEndErrorSize,a=0,x=i.Ends?`m0,${e}v${-2*e}`:"",d=i.Ends?`m${e},0h${-2*e}`:"",g=x,_=x,p=d,v=d;const E=(y,T)=>{if(!i.MainError)return`M${y},${T}`;let X="M0,0";return y?X+(T?`L${y},${T}`:`H${y}`):T?`M0,0V${T}`:X};switch(i.Ends){case 2:a=Math.max(h.width+1,Math.round(.66*e)),g=`m${a},${e}h${-a}v${-2*e}h${a}`,_=`m${-a},${e}h${a}v${-2*e}h${-a}`,p=`m${-e},${a}v${-a}h${2*e}v${a}`,v=`m${-e},${-a}v${a}h${2*e}v${-a}`;break;case 3:e=Math.max(e,Math.round(8*o.fMarkerSize*.66)),a=Math.max(h.width+1,Math.round(.66*e)),g=`l${a},${e}v${-2*e}l${-a},${e}`,_=`l${-a},${e}v${-2*e}l${a},${e}`,p=`l${-e},${a}h${2*e}l${-e},${-a}`,v=`l${-e},${-a}h${2*e}l${-e},${a}`;break;case 4:e=Math.max(e,Math.round(8*o.fMarkerSize*.66)),a=Math.max(h.width+1,Math.round(.66*e)),g=`l${a},${e}m0,${-2*e}l${-a},${e}`,_=`l${-a},${e}m0,${-2*e}l${a},${e}`,p=`l${-e},${a}m${2*e},0l${-e},${-a}`,v=`l${-e},${-a}m${2*e},0l${-e},${a}`}this.error_size=e,e=Math.floor((h.width-1)/2);let M=u.filter(y=>y.exlow>0||y.exhigh>0||y.eylow>0||y.eyhigh>0);(i.skip_errors_x0||i.skip_errors_y0)&&(M=M.filter(y=>!(0==y.x&&i.skip_errors_x0||0==y.y&&i.skip_errors_y0))),!(0,b.isBatchMode)()&&b.settings.Tooltip&&n&&M.append("svg:path").style("fill","none").style("pointer-events","visibleFill").attr("d",y=>`M${y.grx0},${y.gry0}h${y.grx2-y.grx0}v${y.gry2-y.gry0}h${y.grx0-y.grx2}z`),M.append("svg:path").call(h.func).style("fill","none").attr("d",y=>(y.error=!0,(y.exlow>0?E(y.grx0+e,y.grdx0)+g:"")+(y.exhigh>0?E(y.grx2-e,y.grdx2)+_:"")+(y.eylow>0?E(y.grdy0,y.gry0-e)+v:"")+(y.eyhigh>0?E(y.grdy2,y.gry2+e)+p:"")))}if(i.Mark){this.createAttMarker({attr:o,style:i.Mark-100}),this.marker_size=this.markeratt.getFullSize(),this.markeratt.resetPos();let a,x,d,e="",g=!(0,b.isBatchMode)()&&b.settings.Tooltip&&(!this.markeratt.fill||this.marker_size<7)&&!u&&n,_="",p=Math.max(5,Math.round(.7*this.marker_size)),v=1e6/(this.markeratt.getMarkerLength()+7),E=1;f?this.canOptimize()&&f.length>1.5*v&&(E=Math.min(2,Math.round(f.length/v))):f=this.optimizeBins(v);for(let M=0;M<f.length;M+=E)a=f[M],x=t.grx(a.x),x>-this.marker_size&&x<r+this.marker_size&&(d=t.gry(a.y),d>-this.marker_size&&d<l+this.marker_size&&(e+=this.markeratt.create(x,d),g&&(_+=`M${x-p},${d-p}h${2*p}v${2*p}h${-2*p}z`)));e.length>0&&(s.append("svg:path").attr("d",e).call(this.markeratt.func),null===u&&"none"==this.draw_kind&&n&&(this.draw_kind=101==i.Mark?"path":"mark")),g&&_&&s.append("svg:path").attr("d",_).style("fill","none").style("pointer-events","visibleFill")}}appendQQ(t,i){let s=Math.max(t.scale_xmin,i.fXq1),r=Math.min(t.scale_xmax,i.fXq2),l=Math.max(t.scale_ymin,i.fYq1),h=Math.min(t.scale_ymax,i.fYq2),c="",n=(e,a,x,d)=>`M${t.grx(e)},${t.gry(a)}L${t.grx(x)},${t.gry(d)}`,o=(i.fYq2-i.fYq1)*(t.scale_xmin-i.fXq1)/(i.fXq2-i.fXq1)+i.fYq1,m=(i.fYq2-i.fYq1)*(t.scale_xmax-i.fXq1)/(i.fXq2-i.fXq1)+i.fYq1;c=o<t.scale_ymin?n((i.fXq2-i.fXq1)*(t.scale_ymin-i.fYq1)/(i.fYq2-i.fYq1)+i.fXq1,t.scale_ymin,s,l):n(t.scale_xmin,o,s,l),c+=m>t.scale_ymax?n(r,h,(i.fXq2-i.fXq1)*(t.scale_ymax-i.fYq1)/(i.fYq2-i.fYq1)+i.fXq1,t.scale_ymax):n(r,h,t.scale_xmax,m);let f=new O.rE({style:1,width:1,color:"black"}),u=new O.rE({style:2,width:1,color:"black"});this.draw_g.append("path").attr("d",n(s,l,r,h)).call(f.func).style("fill","none"),this.draw_g.append("path").attr("d",c).call(u.func).style("fill","none")}drawBins3D(){console.log("Load ./hist/TGraphPainter.mjs to draw graph in 3D")}drawGraph(){let t=this.get_main(),i=this.getObject();if(!t)return;if(this.options.pos3d)return this.drawBins3D(t,i);let s=!!this.get_gme(),r=t.getGrFuncs(this.options.second_x,this.options.second_y),l=t.getFrameWidth(),h=t.getFrameHeight();if(this.createG(!t.pad_layer),this.options._pfc||this.options._plc||this.options._pmc){let n=this.getMainPainter();if("function"==typeof(null==n?void 0:n.createAutoColor)){let o=n.createAutoColor();this.options._pfc&&(i.fFillColor=o,delete this.fillatt),this.options._plc&&(i.fLineColor=o,delete this.lineatt),this.options._pmc&&(i.fMarkerColor=o,delete this.markeratt),this.options._pfc=this.options._plc=this.options._pmc=!1}}this.createAttLine({attr:i,can_excl:!0}),this.createAttFill({attr:i}),this.fillatt.used=!1,this.draw_kind="none",this.marker_size=0;let c=s?this.draw_g.append("svg:g"):this.draw_g;if(this.drawBins(r,this.options,c,l,h,this.lineatt,this.fillatt,!0),"TGraphQQ"==i._typename&&this.appendQQ(r,i),s){for(let n=0;n<i.fNYErrors;++n){let o=this.lineatt,m=this.fillatt;this.options.individual_styles&&(o=new O.rE({attr:i.fAttLine[n],std:!1}),m=new S.Y({attr:i.fAttFill[n],std:!1,svg:this.getCanvSvg()}));let f=this.draw_g.append("svg:g"),u=n<this.options.blocks.length?this.options.blocks[n]:this.options;this.extractGmeErrors(n),this.drawBins(r,u,f,l,h,o,m)}this.extractGmeErrors(0)}(0,b.isBatchMode)()||(0,z.Z)(this,this.testEditable())}extractTooltip(t){if(!t)return null;if("lines"==this.draw_kind||"path"==this.draw_kind||"mark"==this.draw_kind)return this.extractTooltipForPath(t);if("nodes"!=this.draw_kind)return null;let i=this.getFramePainter(),s=i.getFrameHeight(),r=this.error_size,l=1===this.options.Bar,h=l?i.getGrFuncs(this.options.second_x,this.options.second_y):null,c=null,n=1e10,o=null,m=this.marker_size?Math.round(this.marker_size/2+1.5):0;if(this.draw_g.selectAll(".grpoint").each(function(){let a=(0,A.Ys)(this).datum();if(void 0===a)return;let d,x=k(t.x-a.grx1,2);if(1===t.nproc&&(x+=k(t.y-a.gry1,2)),x>=n)return;if(a.error||a.rect||a.marker)d={x1:Math.min(-r,a.grx0,-m),x2:Math.max(r,a.grx2,m),y1:Math.min(-r,a.gry2,-m),y2:Math.max(r,a.gry0,m)};else if(a.bar){if(d={x1:-a.width/2,x2:a.width/2,y1:0,y2:s-a.gry1},l){let p=h.gry(0);d.y1=a.gry1>p?p-a.gry1:0,d.y2=a.gry1>p?0:p-a.gry1}}else d={x1:-5,x2:5,y1:-5,y2:5};let _=t.y>=a.gry1+d.y1&&t.y<=a.gry1+d.y2;t.x>=a.grx1+d.x1&&t.x<=a.grx1+d.x2&&(_||t.nproc>1)&&(n=x,c=this,o=d,o.exact=_)}),null===c)return null;let f=(0,A.Ys)(c).datum(),u=this.getObject(),e={name:u.fName,title:u.fTitle,x:f.grx1,y:f.gry1,color1:this.lineatt.color,lines:this.getTooltips(f),rect:o,d3bin:c};return e.user_info={obj:u,name:u.fName,bin:f.indx,cont:f.y,grx:f.grx1,gry:f.gry1},this.fillatt&&this.fillatt.used&&!this.fillatt.empty()&&(e.color2=this.fillatt.getFillColor()),o.exact&&(e.exact=!0),e.menu=e.exact,e.menu_dist=3,e.bin=f,e.binindx=f.indx,e}showTooltip(t){if(!t)return void(this.draw_g&&this.draw_g.select(".tooltip_bin").remove());if(t.usepath)return this.showTooltipForPath(t);let i=(0,A.Ys)(t.d3bin).datum(),s=this.draw_g.select(".tooltip_bin");s.empty()&&(s=this.draw_g.append("svg:rect").attr("class","tooltip_bin h1bin").style("pointer-events","none")),t.changed=s.property("current_bin")!==t.d3bin,t.changed&&s.attr("x",i.grx1+t.rect.x1).attr("width",t.rect.x2-t.rect.x1).attr("y",i.gry1+t.rect.y1).attr("height",t.rect.y2-t.rect.y1).style("opacity","0.3").property("current_bin",t.d3bin)}processTooltipEvent(t){let i=this.extractTooltip(t);return(!t||!t.disabled)&&this.showTooltip(i),i}findBestBin(t){if(!this.bins)return null;let n,o,m,f,u,i="lines"==this.draw_kind,s=-1,r=null,l=1e10,c=this.getFramePainter().getGrFuncs(this.options.second_x,this.options.second_y);for(f=0;f<this.bins.length;++f)u=this.bins[f],o=c.grx(u.x),m=c.gry(u.y),n=k(t.x-o,2)+k(t.y-m,2),n<l&&(l=n,r=u,s=f);l>100&&i&&(r=null);let e=Math.max(this.lineatt.width+3,4);this.marker_size>0&&(e=Math.max(this.marker_size,e)),r&&(l=Math.sqrt(k(t.x-c.grx(r.x),2)+k(t.y-c.gry(r.y),2))),!i&&l>e&&(r=null),r||(s=-1);let a={bin:r,indx:s,dist:l,radius:Math.round(e)};if(!r&&i){l=1e10;const x=(v,E,M)=>E>=v&&v>=M||E<=v&&v<=M;let _,d=this.bins[0],g=c.grx(d.x),p=0;for(f=1;f<this.bins.length;++f)u=this.bins[f],o=c.grx(u.x),x(t.x,g,o)&&(_=c.gry(d.y),m=c.gry(u.y),Math.abs(o-g)<1?(p=t.y,n=x(t.y,_,m)?0:Math.min(Math.abs(t.y-_),Math.abs(t.y-m))):(p=_+(t.x-g)/(o-g)*(m-_),n=Math.abs(p-t.y)),n<l&&(l=n,a.linex=t.x,a.liney=p)),d=u,g=o;l<.5*e&&(a.linedist=l,a.closeline=!0)}return a}testEditable(t){let i=this.getObject();return!!i&&(("toggle"==t||void 0!==t&&!t!=i.TestBit(F))&&i.InvertBit(F),!i.TestBit(F))}extractTooltipForPath(t){if(null===this.bins)return null;let i=this.findBestBin(t);if(!i||!i.bin&&!i.closeline)return null;let s="lines"==this.draw_kind,r="mark"==this.draw_kind,h=this.getFramePainter().getGrFuncs(this.options.second_x,this.options.second_y),c=this.getObject(),n={name:c.fName,title:c.fTitle,x:i.bin?h.grx(i.bin.x):i.linex,y:i.bin?h.gry(i.bin.y):i.liney,color1:this.lineatt.color,lines:this.getTooltips(i.bin),usepath:!0};return n.user_info={obj:c,name:c.fName,bin:0,cont:0,grx:n.x,gry:n.y},n.ismark=r,n.islines=s,i.closeline?(n.menu=n.exact=!0,n.menu_dist=i.linedist):i.bin&&(this.options.EF&&s?(n.gry1=h.gry(i.bin.y-i.bin.eylow),n.gry2=h.gry(i.bin.y+i.bin.eyhigh)):n.gry1=n.gry2=h.gry(i.bin.y),n.binindx=i.indx,n.bin=i.bin,n.radius=i.radius,n.user_info.bin=i.indx,n.user_info.cont=i.bin.y,n.exact=Math.abs(t.x-n.x)<=i.radius&&(Math.abs(t.y-n.gry1)<=i.radius||Math.abs(t.y-n.gry2)<=i.radius),n.menu=n.exact,n.menu_dist=Math.sqrt(k(t.x-n.x,2)+k(Math.min(Math.abs(t.y-n.gry1),Math.abs(t.y-n.gry2)),2))),this.fillatt&&this.fillatt.used&&!this.fillatt.empty()&&(n.color2=this.fillatt.getFillColor()),s||(n.color1=this.getColor(c.fMarkerColor),n.color2||(n.color2=n.color1)),n}showTooltipForPath(t){let i=this.draw_g.select(".tooltip_bin");if(t&&t.bin){if(i.empty()&&(i=this.draw_g.append("svg:g").attr("class","tooltip_bin")),t.changed=i.property("current_bin")!==t.bin,t.changed)if(i.selectAll("*").remove(),i.property("current_bin",t.bin),t.ismark)i.append("svg:rect").attr("class","h1bin").style("pointer-events","none").style("opacity","0.3").attr("x",Math.round(t.x-t.radius)).attr("y",Math.round(t.y-t.radius)).attr("width",2*t.radius).attr("height",2*t.radius);else{i.append("svg:circle").attr("cy",Math.round(t.gry1)),Math.abs(t.gry1-t.gry2)>1&&i.append("svg:circle").attr("cy",Math.round(t.gry2));let s=i.selectAll("circle").attr("r",t.radius).attr("cx",Math.round(t.x));t.islines?(this.options.Line||this.options.Curve?s.call(this.lineatt.func):s.style("stroke","black"),this.options.Fill?s.call(this.fillatt.func):s.style("fill","none")):s.style("stroke","black"==t.color1?"green":"black").style("fill","none")}}else i.remove()}moveEnabled(){return this.testEditable()}moveStart(t,i){this.pos_dx=this.pos_dy=0;let s=this.extractTooltip({x:t,y:i});if(s&&s.exact&&void 0!==s.binindx){this.move_binindx=s.binindx,this.move_bin=s.bin;let r=this.getFramePainter(),l=null==r?void 0:r.getGrFuncs(this.options.second_x,this.options.second_y);this.move_x0=l?l.grx(this.move_bin.x):t,this.move_y0=l?l.gry(this.move_bin.y):i}else delete this.move_binindx}moveDrag(t,i){if(this.pos_dx+=t,this.pos_dy+=i,void 0===this.move_binindx)this.draw_g.attr("transform",`translate(${this.pos_dx},${this.pos_dy})`);else{let s=this.getFramePainter(),r=null==s?void 0:s.getGrFuncs(this.options.second_x,this.options.second_y);r&&this.move_bin&&(this.move_bin.x=r.revertAxis("x",this.move_x0+this.pos_dx),this.move_bin.y=r.revertAxis("y",this.move_y0+this.pos_dy),this.drawGraph())}}moveEnd(t){let i="";if(void 0===this.move_binindx){this.draw_g.attr("transform",null);let s=this.getFramePainter(),r=null==s?void 0:s.getGrFuncs(this.options.second_x,this.options.second_y);if(r&&this.bins&&!t){for(let l=0;l<this.bins.length;++l){let h=this.bins[l];h.x=r.revertAxis("x",r.grx(h.x)+this.pos_dx),h.y=r.revertAxis("y",r.gry(h.y)+this.pos_dy),i+=`SetPoint(${h.indx},${h.x},${h.y});;`,0==h.indx&&this.matchObjectType("TCutG")&&(i+=`SetPoint(${this.getObject().fNpoints-1},${h.x},${h.y});;`)}this.drawGraph()}}else i=`SetPoint(${this.move_bin.indx},${this.move_bin.x},${this.move_bin.y});;`,0==this.move_bin.indx&&this.matchObjectType("TCutG")&&(i+=`SetPoint(${this.getObject().fNpoints-1},${this.move_bin.x},${this.move_bin.y});;`),delete this.move_binindx;i&&!t&&this.submitCanvExec(i)}fillContextMenu(t){return super.fillContextMenu(t),this.snapid||t.addchk(this.testEditable(),"Editable",()=>{this.testEditable("toggle"),this.drawGraph()}),t.size()>0}executeMenuCommand(t,i){if(super.executeMenuCommand(t,i))return!0;let s=this.getCanvPainter(),r=this.getFramePainter();if("RemovePoint"==t.fName||"InsertPoint"==t.fName){let c=null==r?void 0:r.getLastEventPos();if(!s||s._readonly||!c)return!0;let n=this.extractTooltip(c);if("InsertPoint"==t.fName){var l,h;let o=null==r?void 0:r.getGrFuncs(this.options.second_x,this.options.second_y),m=null!==(l=null==o?void 0:o.revertAxis("x",c.x))&&void 0!==l?l:0,f=null!==(h=null==o?void 0:o.revertAxis("y",c.y))&&void 0!==h?h:0;this.submitCanvExec(`AddPoint(${m.toFixed(3)}, ${f.toFixed(3)})`,this.args_menu_id)}else this.args_menu_id&&void 0!==(null==n?void 0:n.binindx)&&this.submitCanvExec(`RemovePoint(${n.binindx})`,this.args_menu_id);return!0}return!1}updateObject(t,i){if(!this.matchObjectType(t))return!1;i&&i!=this.options.original&&this.decodeOptions(i);let s=this.getObject();if(s.fBits=t.fBits,s.fTitle=t.fTitle,s.fX=t.fX,s.fY=t.fY,s.fNpoints=t.fNpoints,s.fMinimum=t.fMinimum,s.fMaximum=t.fMaximum,this.createBins(),delete this.$redraw_hist,this.axes_draw){let r=this.createHistogram(t.fHistogram);r.fTitle=s.fTitle;let l=this.getMainPainter();null!=l&&l.$secondary&&(l.updateObject(r,this.options.Axis),this.$redraw_hist=!0)}return!0}canZoomInside(t,i,s){let r=this.getObject();if(!r||t!==(this.options.pos3d?"y":"x"))return!1;for(let l=0;l<r.fNpoints;++l)if(i<r.fX[l]&&r.fX[l]<s)return!0;return!1}clickButton(t){if("ToggleZoom"!==t)return!1;let i=this.getFramePainter();return!(!i||this.xmin===this.xmax&&this.ymin===this.ymax||(i.zoom(this.xmin,this.xmax,this.ymin,this.ymax),0))}findFunc(){var t;let i=this.getObject();if(null!=i&&null!==(t=i.fFunctions)&&void 0!==t&&t.arr)for(let s=0;s<i.fFunctions.arr.length;++s){let r=i.fFunctions.arr[s];if("TF1"==r._typename||"TF2"==r._typename)return r}return null}findStat(){var t;let i=this.getObject();if(null!=i&&null!==(t=i.fFunctions)&&void 0!==t&&t.arr)for(let s=0;s<i.fFunctions.arr.length;++s){let r=i.fFunctions.arr[s];if("TPaveStats"==r._typename&&"stats"==r.fName)return r}return null}createStat(){var t;let i=this.findFunc();if(!i)return null;let s=this.findStat();if(s)return s;if(null!==(t=this.getCanvPainter())&&void 0!==t&&t.normal_canvas||this.options.PadStats)return null;this.create_stats=!0;const r=b.gStyle;return s=(0,b.create)("TPaveStats"),Object.assign(s,{fName:"stats",fOptStat:0,fOptFit:r.fOptFit||111,fBorderSize:1}),s.fX1NDC=r.fStatX-r.fStatW,s.fY1NDC=r.fStatY-r.fStatH,s.fX2NDC=r.fStatX,s.fY2NDC=r.fStatY,s.fFillColor=r.fStatColor,s.fFillStyle=r.fStatStyle,s.fTextAngle=0,s.fTextSize=r.fStatFontSize,s.fTextAlign=12,s.fTextColor=r.fStatTextColor,s.fTextFont=r.fStatFont,s.AddText(i.fName),this.getObject().fFunctions.Add(s),s}fillStatistic(t,i,s){let r=this.findFunc();return!!(r&&s&&this.create_stats)&&(t.clearPave(),t.fillFunctionStat(r,s),!0)}drawNextFunction(t){var i,s;let r=this.getObject();if(t>=((null==r||null===(i=r.fFunctions)||void 0===i||null===(s=i.arr)||void 0===s?void 0:s.length)||0))return Promise.resolve(this);let l=this.getPadPainter(),h=r.fFunctions.arr[t],c=r.fFunctions.opt[t];return h.$main_painter=this,l.drawObject(this.getDom(),h,c).then(()=>this.drawNextFunction(t+1))}drawAxisHisto(){let t=this.createHistogram();return Y.f.draw(this.getDom(),t,this.options.Axis)}static _drawGraph(t,i){t.decodeOptions(i,!0),t.createBins(),t.createStat(),!b.settings.DragGraphs&&!graph.TestBit(F)&&graph.InvertBit(F);let s=Promise.resolve();return(!t.getMainPainter()||t.options.second_x||t.options.second_y)&&t.options.Axis&&(s=t.drawAxisHisto().then(r=>{r&&(t.axes_draw=!0,t._own_histogram||(t.$primary=!0),r.$secondary=!0)})),s.then(()=>(t.addToPadPrimitives(),t.drawGraph())).then(()=>t.drawNextFunction(0))}static draw(t,i,s){return P._drawGraph(new P(t,i),s)}}}}]);
//# sourceMappingURL=879.d1e09332234c2f46.js.map