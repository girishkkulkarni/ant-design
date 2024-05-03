"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(An,X,e){e.d(X,{Z:function(){return fn},f:function(){return S}});var rn=e(667294),S=rn.createContext(!1);function fn(){return rn.useContext(S)}},438746:function(An,X,e){e.d(X,{Z:function(){return b}});var rn=e(97857),S=e.n(rn),fn=e(952677),x=e.n(fn),B=e(805574),C=e.n(B),Sn=e(385956),s=e(667294),J=e(302559);function l(Z){return Z.replace("-cn","").replace(/\/$/,"")}function b(){var Z=(0,Sn.useLocation)(),dn=Z.search,Q=(0,J.default)(),m=C()(Q,2),r=m[1],c=s.useCallback(function(t,j){var v=l(t);if(r==="cn"&&(v="".concat(v,"-cn")),dn&&(v="".concat(v).concat(dn)),j){var M;x()(j)==="object"?M=j[r]:M=j,v="".concat(v,"#").concat(M)}return v},[r,dn]);return S()(S()({},Z),{},{pathname:l(Z.pathname),getLink:c})}},361446:function(An,X,e){var rn=e(805574),S=e.n(rn),fn=e(719632),x=e.n(fn),B=e(9783),C=e.n(B),Sn=e(168400),s=e.n(Sn),J=e(667294),l=e(844183),b=e(566254),Z=e(647759),dn=e(693967),Q=e.n(dn),m=e(385956),r=e(472638),c=e(438746),t=e(785893),j,v,M;function cn(R){return R&&/^\d+\.\d+\.\d+$/.test(R)}var xn=(0,Z.kc)(function(R){var E=R.css,L=R.token;return{link:E(j||(j=s()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:E(v||(v=s()([`
    margin-inline-end: 0;
  `]))),subtitle:E(M||(M=s()([`
    margin-inline-start: `,`px;
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),L.marginXS,L.fontSizeSM)}}),d=function(E){var L=xn(),$=L.styles,A=E.before,H=E.after,Y=E.link,I=E.title,z=E.subtitle,an=E.search,_=E.tag,W=E.className;return!A&&!H?(0,t.jsxs)(r.Z,{to:"".concat(Y).concat(an),className:Q()(W,C()({},$.link,_)),children:[(0,t.jsxs)("span",{children:[I,z&&(0,t.jsx)("span",{className:$.subtitle,children:z})]}),_&&(0,t.jsx)(l.Z,{bordered:!1,className:Q()($.tag),color:cn(_)||_==="New"?"success":"processing",children:_.replace("VERSION",b.Z)})]}):(0,t.jsxs)(r.Z,{to:"".concat(Y).concat(an),className:W,children:[A,I,z&&(0,t.jsx)("span",{className:$.subtitle,children:z}),H]})},F=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},L=(0,m.useFullSidebarData)(),$=(0,c.Z)(),A=$.pathname,H=$.search,Y=(0,m.useSidebarData)(),I=E.before,z=E.after,an=(0,J.useMemo)(function(){var _,W=x()(Y!=null?Y:[]);if(A.startsWith("/docs/spec")){var en=W.splice(0,1);W.push.apply(W,x()(en))}if(A.startsWith("/docs/react")){var wn,D=(wn=Object.entries(L).find(function(w){var g=S()(w,1),N=g[0];return N.startsWith("/changelog")}))===null||wn===void 0?void 0:wn[1];D&&W.splice(1,0,D[0])}if(A.startsWith("/changelog")){var u,k=(u=Object.entries(L).find(function(w){var g=S()(w,1),N=g[0];return N.startsWith("/docs/react")}))===null||u===void 0?void 0:u[1];k&&(W.unshift(k[0]),W.push.apply(W,x()(k.slice(1))))}return(_=W==null?void 0:W.reduce(function(w,g){if(g!=null&&g.title)if(A.startsWith("/docs/spec")){var N,tn,un=g.children.reduce(function(f,P){var G,K,ln=(G=(K=P.frontmatter)===null||K===void 0?void 0:K.type)!==null&&G!==void 0?G:"default";return f[ln]||(f[ln]=[]),f[ln].push(P),f},{}),gn=[];gn.push.apply(gn,x()((N=(tn=un.default)===null||tn===void 0?void 0:tn.map(function(f){return{label:(0,t.jsxs)(r.Z,{to:"".concat(f.link).concat(H),children:[I,f==null?void 0:f.title,z]}),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&N!==void 0?N:[])),Object.entries(un).forEach(function(f){var P=S()(f,2),G=P[0],K=P[1];G!=="default"&&gn.push({type:"group",label:G,key:G,children:K==null?void 0:K.map(function(ln){return{label:(0,t.jsxs)(r.Z,{to:"".concat(ln.link).concat(H),children:[I,ln==null?void 0:ln.title,z]}),key:ln.link.replace(/(-cn$)/g,"")}})})}),w.push({label:g==null?void 0:g.title,key:g==null?void 0:g.title,children:gn})}else{var mn;w.push({type:"group",label:g==null?void 0:g.title,key:g==null?void 0:g.title,children:(mn=g.children)===null||mn===void 0?void 0:mn.map(function(f){var P,G;return{label:(0,t.jsx)(d,{before:I,after:z,link:f.link,title:f==null?void 0:f.title,subtitle:(P=f.frontmatter)===null||P===void 0?void 0:P.subtitle,search:H,tag:(G=f.frontmatter)===null||G===void 0?void 0:G.tag}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var pn=g.children||[];pn.every(function(f){var P;return f==null||(P=f.frontmatter)===null||P===void 0?void 0:P.date})&&pn.sort(function(f,P){var G,K;return((G=f.frontmatter)===null||G===void 0?void 0:G.date)>((K=P.frontmatter)===null||K===void 0?void 0:K.date)?-1:1}),w.push.apply(w,x()(pn.map(function(f){var P;return{label:(0,t.jsx)(d,{before:I,after:z,link:f.link,title:f==null?void 0:f.title,search:H,tag:(P=f.frontmatter)===null||P===void 0?void 0:P.tag}),key:f.link.replace(/(-cn$)/g,"")}})))}return w},[]))!==null&&_!==void 0?_:[]},[Y,L,A,H,E]);return[an,A]};X.Z=F},148050:function(An,X,e){e.r(X);var rn=e(168400),S=e.n(rn),fn=e(667294),x=e(639389),B=e.n(x),C=e(879587),Sn=e(647759),s=e(785893),J,l="https://github.com/ant-design/ant-design/edit/master/",b=(0,Sn.kc)(function(dn){var Q=dn.token,m=dn.css,r=Q.colorIcon,c=Q.colorText,t=Q.iconCls;return{editButton:m(J||(J=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),Q.marginXS,t,r,Q.fontSizeLG,Q.motionDurationSlow,c)}}),Z=function(Q){var m=Q.title,r=Q.filename,c=b(),t=c.styles;return(0,s.jsx)(C.Z,{title:m,children:(0,s.jsx)("a",{className:t.editButton,href:"".concat(l).concat(r),target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(x.EditOutlined,{})})})};X.default=Z},787729:function(An,X,e){e.r(X),e.d(X,{default:function(){return io}});var rn=e(805574),S=e.n(rn),fn=e(693967),x=e.n(fn),B=e(727484),C=e.n(B),Sn=e(533852),s=e(667294),J=e(75529),l=e(715778),b=e(385956),Z=e(302559),dn=e(438746),Q=e(168400),m=e.n(Q),r=e(370917),c=e(647759),t=e(785893),j,v={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},M=function(){var n=(0,c.Fg)(),a=function h(y){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(y,"-").concat(p,` {
  background: `).concat(n["".concat(y,"-").concat(p)],`;
}
`).concat(h(y,p+1),`
    `):""},i=function h(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return y<=13?`
.palette-gray-`.concat(y,` {
  background: `).concat(v[y],`;
}
`).concat(h(y+1),`
    `):""};return(0,t.jsx)(r.xB,{styles:(0,r.iv)(j||(j=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-inline-end: 0;
              }

              .main-color-item {
                margin-inline-end: 0;

                &:hover {
                  margin-inline-end: -`,`px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 `,`px;
            font-size: `,`px;
            text-align: center;
          }

          &-picker {
            margin: `,`px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              font-size: `,`px;
              font-family: Consolas, sans-serif;
              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              color: `,`;
              font-size: `,`px;

              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }

              &-dark {
                margin-inline-start: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-inline-end: `,`px;
            padding: 0 `,`px;
            font-size: `,`px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all `,`;

            &:first-child {
              border-radius: `,"px ",`px 0 0;
            }

            &:last-child {
              border-radius: 0 0 `,"px ",`px;
            }

            &:hover {
              margin-inline-end: -`,`px;
              border-radius: 0 `,"px ",`px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all `,`;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all `,`;
          }
        }

        .color-title {
          margin: 0 0 `,`px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: `,`px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: `,"px ",`px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-inline-end: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: `,"px ",`px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: `,`px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),n.paddingXS,n.marginMD,n.fontSizeXL,n.marginLG,n.margin,n.fontSize,n.margin,n.margin,n.colorError,n.fontSize,n.margin,a("blue"),a("purple"),a("cyan"),a("green"),a("magenta"),a("red"),a("volcano"),a("orange"),a("gold"),a("yellow"),a("lime"),a("geekblue"),i(),n.marginXXS,n.paddingSM,n.fontSize,n.motionDurationMid,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.marginXS,n.borderRadiusSM,n.borderRadiusSM,n.motionDurationSlow,n.motionDurationSlow,n.marginLG,n.fontSize,n.paddingXL,n.paddingXL-4,n.borderRadiusSM,n.borderRadiusSM,n.paddingXS)})},cn=M,xn,d=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(xn||(xn=m()([`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          > a[aria-hidden]:first-child {
            float: left;
            width: 20px;
            padding-inline-end: `,`px;
            font-size: 0;
            line-height: inherit;
            text-align: right;
            padding-inline-end: `,`px;
            margin-inline-start: -`,`px;

            [data-direction='rtl'] & {
              float: right;
            }

            &:hover {
              border: 0;
            }

            > .icon-link::before {
              font-size: `,`px;
              content: '#';
            }
          }

          &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
            visibility: hidden;
          }
        }
      `])),o.paddingXXS,o.paddingXXS,o.marginLG,o.fontSizeXL)})},F,R=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(F||(F=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),o.colorText,o.fontSize,o.fontFamily,o.lineHeight,o.colorBgContainer)})},E=e(693399),L,$=function(){var o=(0,c.Fg)(),n=o.anchorTop;return s.useInsertionEffect(function(){(0,E.updateCSS)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,t.jsx)(r.xB,{styles:(0,r.iv)(L||(L=m()([`
        @layer global {
          body,
          div,
          dl,
          dt,
          dd,
          ul,
          ol,
          li,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          pre,
          code,
          form,
          fieldset,
          legend,
          input,
          textarea,
          p,
          blockquote,
          th,
          td,
          hr,
          button,
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            margin: 0;
            padding: 0;
          }

          ul,
          ol {
            list-style: none;
          }

          img {
            vertical-align: middle;
            border-style: none;
          }

          [id] {
            scroll-margin-top: `,`px;
          }

          [data-prefers-color='dark'] {
            color-scheme: dark;
          }

          [data-prefers-color='light'] {
            color-scheme: light;
          }
        }
      `])),n)})},A=e(510274),H,Y=function(){var n=(0,c.Fg)(),a=n.antCls,i=n.colorPrimary;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(H||(H=m()([`
        .markdown {
          color: `,`;
          font-size: `,`px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: `,`px;
          margin-bottom: `,`px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-inline-start: `,`px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: `,`px;
        }

        .markdown h5 {
          font-size: `,`px;
        }

        .markdown h6 {
          font-size: `,`px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: `,`px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: circle;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background-color: `,`;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: `,"px ",`px;
            font-size: `,`px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 `,`px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-inline-end: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-inline-start: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-inline-end: 0.8em;
            padding-inline-start: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-inline-start: `,`px;
          opacity: 0;
          transition: opacity `,`;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-inline-start: `,`px;
          text-decoration: none;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: `,`px;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: `,"px ",`px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all `,`;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: `,`;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: `,`px;
            margin-bottom: `,`px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: `,`px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.fontSize,n.marginXS,n.marginMD,n.colorTextHeading,n.fontFamily,n.marginSM,n.colorTextHeading,n.fontFamily,n.fontSizeLG,n.fontSize,n.fontSizeSM,n.marginLG,n.colorSplit,a,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,a,n.marginMD,n.paddingXXS,n.siteMarkdownCodeBg,n.colorSplit,n.borderRadiusSM,n.codeFamily,n.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.colorBgLayout,n.siteMarkdownCodeBg,n.borderRadius,n.paddingSM,n.paddingMD,n.fontSize,n.marginMD,n.colorTextSecondary,n.colorSplit,n.colorSplit,n.marginXS,n.motionDurationSlow,n.marginXS,n.marginXS,n.marginXS,a,n.colorTextSecondary,n.fontSizeLG,n.motionDurationSlow,n.colorText,n.colorSplit,n.paddingSM,n.paddingLG,n.colorSplit,n.colorSplit,n.colorSplit,n.motionDurationSlow,Math.max(n.fontSize-1,12),n.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.fontWeightStrong,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),a,a,n.marginXS,n.marginXS,a,n.padding,i,new A.C(i).setAlpha(.75).toHex8String(),a,a,n.colorWhite,a,new A.C(i).setAlpha(.75).toHexString(),a,a,new A.C(i).setAlpha(.75).toHexString(),a,a,a,a,new A.C(i).setAlpha(.6).toHexString(),a,a,a)})},I=Y,z,an=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(z||(z=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: `,"px ",`px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: `,`;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: `,`px 0;
          padding: `,"px ",`px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: `,`;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),o.padding,o.paddingXL,o.colorText,o.fontSize,o.borderRadius,o.colorText,o.lineHeightLG,o.margin,o.paddingSM,o.paddingMD,o.colorBgLayout)})},_,W=function(){var n=(0,c.Fg)(),a=n.antCls,i=n.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(_||(_=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 `,`px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all `,`;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: `,`px;
            cursor: pointer;
            opacity: 0.75;
            transition: all `,`;
            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: `,`px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: `,`px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: `,`px;

            `,` {
              color: `,`;
              transition: all `,`;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: `,`px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: `,`px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity `,`;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: `,`px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: `,"px ",`px;
              font-size: `,`px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
          display: flex;
          align-items: center;
          column-gap: `,`px;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),n.lineWidth*2,n.margin,n.colorBgContainer,n.colorSplit,n.borderRadiusLG,n.motionDurationMid,n.colorText,n.colorBgContainer,n.colorBgContainer,n.borderRadiusLG,n.borderRadiusLG,n.colorPrimary,n.fontSizeXL,n.motionDurationSlow,n.colorBgContainer,n.borderRadius,n.borderRadius,n.margin,n.colorText,n.fontSize,n.fontSizeSM,n.paddingXXS,i,n.colorTextSecondary,n.motionDurationSlow,n.colorText,a,a,n.colorText,n.colorSplit,n.fontSize,n.borderRadius,n.borderRadius,n.fontSizeSM,n.colorSplit,a,a,n.borderRadius,n.borderRadius,n.colorBgContainer,n.colorSplit,n.paddingSM,n.colorSplit,n.motionDurationSlow,n.colorTextSecondary,n.colorText,i,n.fontSize,n.colorBgContainer,i,n.green6,n.colorBgContainer,n.paddingSM,n.padding,n.fontSize,n.purple3,n.purple6,n.marginSM,a)})},en=W,wn,D=function(){var o=(0,c.Fg)(),n=o.antCls,a=o.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(wn||(wn=m()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: `,`px;
            cursor: pointer;
            transition:
              color `,` ease-in-out,
              background-color `,` ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: `,"px 0 ",`px;
              font-size: 36px;
              transition: transform `,` ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color `,` ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all `,` cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: `,`px;
          background: `,`;
          border-radius: `,`px;
        }
      `])),o.borderRadiusSM,o.motionDurationSlow,o.motionDurationSlow,a,o.marginSM,o.marginXS,o.motionDurationSlow,n,o.motionDurationSlow,o.colorPrimary,a,n,o.motionDurationSlow,o.fontSizeSM,o.colorBgLayout,o.borderRadiusXS)})},u,k=function(){var o=(0,c.Fg)(),n=o.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(u||(u=m()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 `,`px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: `,`px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: `,`px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: `,`px;
                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),o.marginXS,o.colorIcon,o.motionDurationSlow,o.colorIconHover,o.paddingXS,o.colorBorder,o.borderRadiusSM,o.colorTextSecondary,n,o.fontSizeHeading2,o.colorLinkHover)})},w,g=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(w||(w=m()([`
        /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

        .browser-mockup {
          position: relative;
          border-top: 2em solid rgba(230, 230, 230, 0.7);
          border-radius: `,"px ",`px 0 0;
          box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
        }

        .browser-mockup::before {
          position: absolute;
          top: -1.25em;
          left: 1em;
          display: block;
          width: 0.5em;
          height: 0.5em;
          background-color: #f44;
          border-radius: 50%;
          box-shadow:
            0 0 0 2px #f44,
            1.5em 0 0 2px #9b3,
            3em 0 0 2px #fb5;
          content: '';
        }

        .browser-mockup.with-tab::after {
          position: absolute;
          top: -2em;
          left: 5.5em;
          display: block;
          width: 20%;
          height: 0;
          border-right: 0.8em solid transparent;
          border-bottom: 2em solid white;
          border-left: 0.8em solid transparent;
          content: '';
        }

        .browser-mockup.with-url::after {
          position: absolute;
          top: -1.6em;
          left: 5.5em;
          display: block;
          width: calc(100% - 6em);
          height: 1.2em;
          background-color: #fff;
          border-radius: `,`px;
          content: '';
        }
        .browser-mockup > * {
          display: block;
        }
      `])),o.borderRadiusSM,o.borderRadiusSM,o.borderRadiusXS)})},N,tn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(N||(N=m()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-inline-end: 0;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: `,`px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-inline-start: `,`px;
            .ant-row-rtl & {
              margin-inline-end: `,`px;
              margin-inline-start: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: `,`px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: `,`px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: `,`px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 `,`px;
                  font-size: `,`px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: `,`px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: `,`px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;
              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 `,`px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: `,`px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: `,`px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: `,`px;
                    font-size: `,`px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: `,`px;
                    font-size: `,`px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background-image: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');
            background-repeat: no-repeat;
            background-size: cover;
            .ant-row {
              margin: 0 `,`px;
            }

            .page3-block {
              margin-bottom: `,`px;
              padding: `,`px;
              background: `,`;
              border-radius: `,`px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: `,`px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-inline-start: `,`px;
              }
            }
          }
        }
      `])),o.screenLG,o.padding,o.padding,o.margin,o.margin,o.marginMD,o.marginXL,o.fontSize,o.paddingMD,o.fontSize,o.marginXL,o.fontSize,o.colorBgContainer,o.padding,o.colorSplit,o.marginXL,o.marginXXS,o.marginXS,o.fontSizeSM,o.margin,o.fontSizeSM,o.colorLink,o.marginXS,o.marginXL,o.paddingLG,o.colorBgContainer,o.borderRadiusSM,o.fontSizeSM,o.padding)})},un,gn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(un||(un=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary)})},mn,pn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(mn||(mn=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-inline-start: `,`px;

          .ant-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: `,`px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: `,`px;
          color: `,`;
          font-size: `,`px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: `,`px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: `,`px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all `,`;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow:
            0 1px 0 0 #ddd,
            0 3px 0 0 `,`,
            0 4px 0 0 #ddd,
            0 6px 0 0 `,`,
            0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: `,"px 0 ",`px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-inline-end: 12.5%;
            margin-bottom: `,`px;
            padding: `,`px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: `,`px;

            &:last-child {
              margin-inline-end: 0;
            }

            h4 {
              margin: `,"px 0 ",`px;
            }

            p {
              font-size: `,`px;
              line-height: 24px;
            }
          }
        }
      `])),o.marginLG,o.marginLG,o.padding,o.colorPrimary,o.colorError,o.marginMD,o.colorText,o.fontSizeSM,o.colorTextSecondary,o.fontSizeSM,o.paddingSM,o.colorBgContainer,o.borderRadius,o.motionDurationSlow,o.colorBgContainer,o.colorBgContainer,o.marginXXL,o.marginLG,o.marginLG,o.paddingLG,o.borderRadiusSM,o.margin,o.marginXS,o.fontSizeSM)})},f,P="dumi-default-",G=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(f||(f=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),P,o.colorText,o.colorBgContainer,o.colorBgContainer,o.colorTextPlaceholder,P,o.colorBgElevated,o.colorBgElevated,P,o.controlItemBgActive,o.controlItemBgHover,o.colorText,o.colorText)})},K,ln=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(K||(K=m()([`
        .design-inline-cards {
          display: flex;
          margin: 0 -`,`px;
        }
        .design-inline-cards > * {
          flex: 10%;
          margin: 0 `,`px;
        }
        .design-inline-cards img {
          width: 100%;
          max-width: 100%;
        }
        .design-inline-cards h4 {
          margin-bottom: 0;
        }
      `])),o.marginMD,o.marginMD)})},Pn=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(R,{}),(0,t.jsx)($,{}),(0,t.jsx)(I,{}),(0,t.jsx)(an,{}),(0,t.jsx)(en,{}),(0,t.jsx)(D,{}),(0,t.jsx)(k,{}),(0,t.jsx)(g,{}),(0,t.jsx)(tn,{}),(0,t.jsx)(gn,{}),(0,t.jsx)(pn,{}),(0,t.jsx)(ln,{}),(0,t.jsx)(cn,{}),(0,t.jsx)(d,{}),(0,t.jsx)(G,{})]})},On=Pn,Ln=e(97857),T=e.n(Ln),kn=e(9783),Tn=e.n(kn),Fn=e(639389),Nn=e.n(Fn),Kn=e(469181),Zn=e(344682),Un=e(11739),Yn=e(709894),Vn=e(883458),de=e(722449),_n=function(n){var a=n.direction;return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")},children:(0,t.jsx)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"})})},qn=function(n){return(0,t.jsx)(Nn(),T()(T()({},n),{},{component:function(){return(0,t.jsx)(_n,{direction:n.direction})}}))},re=qn,nt=e(840070),Dn=e(373638),ae=e(438199),pe,ge,et=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.headerHeight,h=n.colorTextHeading,y=n.fontFamily,p=n.mobileMaxWidth;return{logo:a(pe||(pe=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: `,`px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,h,y,i,h,n.marginSM,p),title:a(ge||(ge=m()([`
      line-height: 32px;
    `])))}}),tt=function(n){var a=n.isZhCN,i=(0,b.useLocation)(),h=i.search,y=et(),p=y.styles;return(0,t.jsx)("h1",{children:(0,t.jsxs)(b.Link,{to:Dn.J1("/",a,h),className:p.logo,children:[(0,t.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,t.jsx)("span",{className:p.title,children:"Ant Design"})]})})},ot=tt,rt=e(719632),at=e.n(rt),he=e(24768),ne=e(472638),fe,it={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},lt=(0,c.kc)(function(o){var n=o.token,a=n.antCls,i=n.iconCls,h=n.fontFamily,y=n.fontSize,p=n.headerHeight,U=n.menuItemBorder,O=n.colorPrimary,q=n.colorText;return{nav:(0,c.iv)(fe||(fe=m()([`
      height: 100%;
      font-size: `,`px;
      font-family: Avenir, `,`, sans-serif;
      border: 0 !important;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-inline-end: `,`px;
          padding-inline-start: `,`px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: '';
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),y,h,a,a,a,40+12*2,p,n.paddingSM,n.paddingSM,p,U,q,a,i,a,O,a,a)}}),st=function(n){var a,i,h=n.isZhCN,y=n.isMobile,p=n.responsive,U=n.directionText,O=n.onLangChange,q=n.onDirectionChange,sn=(0,b.useLocation)(),Mn=sn.pathname,on=sn.search,hn=(0,Z.default)(it),Cn=S()(hn,1),jn=Cn[0],V=(0,b.useFullSidebarData)(),vn=((a=V["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],nn=lt(),En=nn.styles,Bn=y?"inline":"horizontal",$n=Mn.split("/").filter(Boolean).slice(0,-1).join("/"),bn=$n||"home";Mn.startsWith("/changelog")?bn="docs/react":Mn.startsWith("/docs/resources")&&(bn="docs/resources");var Rn,In=[{label:(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,t.jsx)(b.FormattedMessage,{id:"app.header.lang"}),onClick:O,key:"switch-lang"},{label:U,onClick:q,key:"switch-direction"}];y?Rn=In:p==="crowded"&&(Rn=[{label:(0,t.jsx)(Fn.MenuOutlined,{}),key:"additional",children:[].concat(In)}]);var Hn=[{label:(0,t.jsx)(ne.Z,{to:Dn.J1("/docs/spec/introduce",h,on),children:jn.design}),key:"docs/spec"},{label:(0,t.jsx)(ne.Z,{to:Dn.J1("/docs/react/introduce",h,on),children:jn.development}),key:"docs/react"},{label:(0,t.jsx)(ne.Z,{to:Dn.J1("/components/overview/",h,on),children:jn.components}),key:"components"},vn.length?{label:(0,t.jsx)(ne.Z,{to:Dn.J1(vn.sort(function(Wn,Gn){var ee,Qn;return((ee=Wn.frontmatter)===null||ee===void 0?void 0:ee.date)>((Qn=Gn.frontmatter)===null||Qn===void 0?void 0:Qn.date)?-1:1})[0].link,h,on),children:jn.blog}),key:"docs/blog"}:null,{label:(0,t.jsx)(ne.Z,{to:Dn.J1("/docs/resources",h,on),children:jn.resources}),key:"docs/resources"},h?{label:(0,t.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,t.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,t.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,t.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,t.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(at()((i=Rn)!==null&&i!==void 0?i:[]));return(0,t.jsx)(he.Z,{mode:Bn,selectedKeys:[bn],className:En.nav,disabledOverflow:!0,items:Hn})},dt=st,ct=e(879587),xe,ve,be,ye,Se,Jn="1.2em",ut=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.colorText,h=n.colorBorder,y=n.colorBgContainer,p=n.colorBgTextHover,U=n.borderRadius,O=n.controlHeight,q=n.motionDurationMid;return{btn:a(xe||(xe=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,h,O,O,U,q,q,p,Jn,Jn,Jn),innerDiv:a(ve||(ve=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Jn,Jn),labelStyle:a(be||(be=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Jn,i,i),label1Style:a(ye||(ye=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,y),label2Style:a(Se||(Se=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),mt=function(n){var a=n.label1,i=n.label2,h=n.tooltip1,y=n.tooltip2,p=n.value,U=n.pure,O=n.onClick,q=ut(),sn=q.styles,Mn=sn.btn,on=sn.innerDiv,hn=sn.labelStyle,Cn=sn.label1Style,jn=sn.label2Style,V=(0,t.jsx)("button",{onClick:O,className:Mn,"aria-label":n["aria-label"],children:(0,t.jsxs)("div",{className:"btn-inner",children:[U&&(p===1?a:i),!U&&(0,t.jsxs)("div",{className:on,children:[(0,t.jsx)("span",{className:x()(hn,p===1?Cn:jn),children:a}),(0,t.jsx)("span",{className:x()(hn,p===1?jn:Cn),children:i})]})]})},"lang-button");return h||y?(0,t.jsx)(ct.Z,{title:p===1?h:y,children:V}):V},ce=mt,je,we,Ce,Me,Ee,ke,Te=1120,Le=1200,pt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},gt=(0,c.kc)(function(o){var n=o.token,a=o.css,i="#ced4d9";return{header:a(je||(je=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
        border: none;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: `,`px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,i,i,i,n.borderRadiusSM),menuRow:a(we||(we=m()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      > * {
        flex: none;
        margin: 0;
        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `])),n.paddingSM),dataDirectionIcon:a(Ce||(Ce=m()([`
      width: 20px;
    `]))),popoverMenu:Tn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(Me||(Me=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(Ee||(Ee=m()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(ke||(ke=m()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `])))}}),ht=function(){var n=(0,Z.default)(pt),a=S()(n,2),i=a[0],h=a[1],y=(0,b.useSiteData)(),p=y.pkg,U=(0,Dn.Is)(),O=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),q=S()(O,2),sn=q[0],Mn=q[1],on=(0,s.useContext)(ae.Z),hn=on.direction,Cn=on.isMobile,jn=on.bannerVisible,V=on.updateSiteConfig,vn=(0,s.useRef)(null),nn=(0,b.useLocation)(),En=nn.pathname,Bn=nn.search,$n=gt(),bn=$n.styles,Rn=(0,s.useCallback)(function(){Mn(function(yn){return T()(T()({},yn),{},{menuVisible:!1})})},[]),In=(0,s.useCallback)(function(){Mn(function(yn){return T()(T()({},yn),{},{windowWidth:window.innerWidth})})},[]),Hn=(0,s.useCallback)(function(yn){Mn(function(zn){return T()(T()({},zn),{},{menuVisible:yn})})},[]),Wn=function(){V({direction:hn!=="rtl"?"rtl":"ltr"})},Gn=function(){V({bannerVisible:!1}),Dn.Fy()&&localStorage.setItem(nt.ANT_DESIGN_NOT_SHOW_BANNER,C()().toISOString())};(0,s.useEffect)(function(){Rn()},[nn]),(0,s.useEffect)(function(){return In(),window.addEventListener("resize",In),function(){window.removeEventListener("resize",In),vn.current&&clearTimeout(vn.current)}},[]);var ee=(0,s.useCallback)(function(yn){var zn=window.location.href,se=window.location.pathname;if(/overview/.test(se)&&/0?[1-39][0-3]?x/.test(yn)){window.location.href=zn.replace(window.location.origin,yn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(yn)?"":"/react","/introduce")).replace(/\/$/,"");return}var oe=new URL(zn.replace(window.location.origin,yn));oe.host.includes("antgroup")?(oe.pathname="".concat(oe.pathname.replace(/\/$/,""),"/"),window.location.href=oe.toString()):window.location.href=oe.href.replace(/\/$/,"")},[]),Qn=(0,s.useCallback)(function(){var yn="".concat(window.location.protocol,"//"),zn=window.location.href.slice(yn.length);Dn.Fy()&&localStorage.setItem("locale",Dn.KE(En)?"en-US":"zh-CN"),window.location.href=yn+zn.replace(window.location.pathname,Dn.J1(En,!Dn.KE(En),Bn).pathname)},[nn]),lo=(0,s.useMemo)(function(){return hn!=="rtl"?"RTL":"LTR"},[hn]),so=(0,s.useMemo)(function(){return hn==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[hn]),co=sn.menuVisible,le=sn.windowWidth,Ke=sn.searching,Ve=T()(Tn()({},p.version,p.version),U==null?void 0:U.docVersions),uo=Object.keys(Ve).map(function(yn){return{value:Ve[yn],label:yn}}),Je=["","index","index-cn"].includes(En),Qe=h==="cn",mo=hn==="rtl",me=null;le<Te?me="crowded":le<Le&&(me="narrow");var po=x()(bn.header,"clearfix",{"home-header":Je}),Ye={isZhCN:Qe,isRTL:mo},_e=(0,t.jsx)(dt,T()(T()({},Ye),{},{responsive:me,isMobile:Cn,directionText:lo,onLangChange:Qn,onDirectionChange:Wn}),"nav"),te=[_e,(0,t.jsx)(Kn.Z,{size:"small",className:bn.versionSelect,defaultValue:p.version,onChange:ee,dropdownStyle:so,popupMatchSelectWidth:!1,getPopupContainer:function(zn){return zn.parentNode},options:uo},"version"),(0,t.jsx)(ce,{onClick:Qn,value:Dn.KE(En)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,t.jsx)(ce,{onClick:Wn,value:hn==="rtl"?2:1,label1:(0,t.jsx)(re,{className:bn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,t.jsx)(re,{className:bn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(ce,{value:1,label1:(0,t.jsx)(Fn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];le<Te?te=Ke?[]:[_e]:le<Le&&(te=Ke?[]:te);var qe=Je?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,t.jsxs)("header",{className:po,children:[Cn&&(0,t.jsx)(Zn.Z,{overlayClassName:bn.popoverMenu,placement:"bottomRight",content:te,trigger:"click",open:co,arrow:{pointAtCenter:!0},onOpenChange:Hn,children:(0,t.jsx)(Fn.MenuOutlined,{className:"nav-phone-icon"})}),Qe&&jn&&(0,t.jsx)(J.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,t.jsx)(Un.Z,{className:bn.banner,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:Cn?i.shortMessage:i.message}),(0,t.jsx)("a",{className:bn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var zn,se;(zn=(se=window).gtag)===null||zn===void 0||zn.call(se,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Gn})}),(0,t.jsxs)(Yn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,t.jsx)(Vn.Z,T()(T()({},qe[0]),{},{children:(0,t.jsx)(ot,T()(T()({},Ye),{},{location:nn}))})),(0,t.jsxs)(Vn.Z,T()(T()({},qe[1]),{},{className:bn.menuRow,children:[(0,t.jsx)("div",{className:"nav-search-wrapper",children:(0,t.jsx)(de.ZP,{})}),!Cn&&te]}))]})]})},ft=ht,go=e(945462),De=e(777502),xt=function(n){var a=n.children,i=n.title,h=n.desc;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:i}),(0,t.jsx)("meta",{property:"og:title",content:i}),h&&(0,t.jsx)("meta",{name:"description",content:h})]}),(0,t.jsx)("div",{style:{minHeight:"100vh"},children:a}),(0,t.jsx)(De.default,{})]})},vt=xt,bt=e(86198),Pe=e(259696),Be=e(49313),yt=function(){var n=(0,b.useRouteMeta)(),a=s.useMemo(function(){var p;if(!n.frontmatter.subtitle&&!n.frontmatter.title)p="404 Not Found - Ant Design";else{var U;p="".concat(n.frontmatter.subtitle||""," ").concat(((U=n.frontmatter)===null||U===void 0?void 0:U.title)||""," - Ant Design")}var O=n.frontmatter.description||"";return[p,O]},[n]),i=S()(a,2),h=i[0],y=i[1];return(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:h}),(0,t.jsx)("meta",{property:"og:title",content:h}),y&&(0,t.jsx)("meta",{name:"description",content:y})]})},ze=yt,St=e(148050),jt=e(468990),wt=e(823493),Ct=e.n(wt),Mt=e(658192),Ae,Oe,Fe,Re=["scroll","resize"],Et=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.boxShadowSecondary,h=n.antCls;return{affixTabs:a(Ae||(Ae=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity `,`,
        transform `,`;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,n.motionDurationSlow,n.motionDurationSlow,h,h,h),affixTabsFixed:a(Oe||(Oe=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Fe||(Fe=m()([`
      text-transform: capitalize;
    `])))}}),Ie=32,kt=function(){var n=s.useRef(null),a=s.useRef([]),i=s.useState(!1),h=S()(i,2),y=h[0],p=h[1],U=s.useState(void 0),O=S()(U,2),q=O[0],sn=O[1],Mn=Et(),on=Mn.styles,hn=on.affixTabs,Cn=on.affixTabsFixed,jn=on.span;function V(nn){var En=document.getElementById(nn);if(En){var Bn=En.offsetTop-n.current.offsetHeight-Ie;(0,Mt.Z)(Bn)}}s.useEffect(function(){var nn=document.querySelectorAll("h2[id]");a.current=Array.from(nn).map(function(En){var Bn=En.id;return Bn}),p(!0)},[]),s.useEffect(function(){var nn=decodeURIComponent((location.hash||"").slice(1));nn&&V(nn)},[y]);var vn=s.useMemo(function(){function nn(){for(var En=window,Bn=En.scrollY,$n=n.current.offsetHeight,bn=a.current.length-1;bn>=0;bn-=1){var Rn=a.current[bn],In=document.getElementById(Rn),Hn=In.offsetTop-$n-Ie;if(Hn<=Bn){sn(Rn);return}}sn(void 0)}return Ct()(nn)},[]);return s.useEffect(function(){return Re.forEach(function(nn){return window.addEventListener(nn,vn)}),vn(),function(){Re.forEach(function(nn){return window.removeEventListener(nn,vn)})}},[]),(0,t.jsx)("div",{className:x()(hn,q&&Cn),ref:n,children:(0,t.jsx)(jt.Z,{activeKey:q,centered:!0,size:"large",onChange:V,items:a.current.map(function(nn){return{key:nn,label:(0,t.jsx)("span",{className:jn,children:nn.replace(/-/g," ")})}})})})},Tt=kt,Ne,He,We,Ze=40,ie=1208,ue=24,Lt=function(){var n=(0,Be.Z)();return(0,c.kc)(function(a){var i=a.token,h=a.css,y=i.antCls;return{resourcePage:h(Ne||(Ne=m()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),ie),resourceContent:h(He||(He=m()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }
            `,`-col {
              padding-top: `,`px !important;
              padding-bottom: `,`px !important;
            }
          }
        }
      `])),Ze,ie,ue,y,i.padding,i.padding),banner:h(We||(We=m()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: `,`px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Ze,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",ie,ie,i.fontSizeLG,ue,ue)}})()},Dt=function(n){var a,i=n.children,h=Lt(),y=h.styles,p=(0,b.useRouteMeta)(),U=(0,Be.Z)(),O=(0,t.jsxs)(bt.Z,{children:[(0,t.jsx)(ze,{}),(0,t.jsxs)("div",{id:"resources-page",className:y.resourcePage,children:[(0,t.jsx)(Tt,{}),(0,t.jsxs)("div",{className:y.banner,children:[(0,t.jsxs)(Pe.Z.Title,{style:{fontSize:30},children:[(a=p.frontmatter)===null||a===void 0?void 0:a.title,(0,t.jsx)(St.default,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,t.jsx)("section",{children:p.frontmatter.description})]}),(0,t.jsx)("div",{className:y.resourceContent,children:i}),(0,t.jsx)(De.default,{})]})]});return U?O:(0,t.jsx)(J.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:O})},Pt=Dt,Bt=e(106750),zt=e(217187),At=e(340908),Ot=e(524229),Ft=e(548657),Rt=e(442708),It=function(n){var a=n.children,i=n.fallback,h=i===void 0?(0,t.jsx)(Ft.Z.Input,{active:!0,size:"small"}):i,y=n.delay,p=y===void 0?200:y;return(0,t.jsx)(Rt.df,{triggerOnce:!0,delay:p,children:function(O){var q=O.inView,sn=O.ref;return(0,t.jsx)("div",{ref:sn,children:(0,t.jsx)(s.Suspense,{fallback:h,children:q?a:(0,t.jsx)("span",{})})})}})},Xn=It,Ue,Nt=s.lazy(function(){return Promise.all([e.e(3156),e.e(7721)]).then(e.bind(e,617721))}),Ht=s.lazy(function(){return e.e(9148).then(e.bind(e,349148))}),Wt=s.lazy(function(){return e.e(8301).then(e.bind(e,368301))}),Zt=s.lazy(function(){return e.e(8598).then(e.bind(e,458598))}),Ut=s.lazy(function(){return Promise.resolve().then(e.bind(e,777502))}),Xt=s.lazy(function(){return e.e(6720).then(e.bind(e,366720))}),$t=s.lazy(function(){return Promise.all([e.e(1249),e.e(9285),e.e(5557)]).then(e.bind(e,135557))}),Gt=s.lazy(function(){return Promise.resolve().then(e.bind(e,148050))}),Kt=(0,c.kc)(function(o){var n=o.token,a=o.css;return{articleWrapper:a(Ue||(Ue=m()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 `,`px;
      }
    }
  `])),n.screenLG,n.paddingLG*2)}}),Vt=function(n){var a,i,h,y=n.children,p=(0,b.useRouteMeta)(),U=(0,dn.Z)(),O=U.pathname,q=U.hash,sn=(0,s.useContext)(ae.Z),Mn=sn.direction,on=Kt(),hn=on.styles,Cn=(0,zt.Z)(!1),jn=S()(Cn,2),V=jn[0],vn=jn[1],nn=(0,s.useState)("tsx"),En=S()(nn,2),Bn=En[0],$n=En[1],bn=(0,s.useMemo)(function(){var Wn;return((Wn=p.toc)===null||Wn===void 0?void 0:Wn.filter(function(Gn){return Gn._debug_demo}).map(function(Gn){return Gn.id}))||[]},[p]),Rn=bn.includes(q.slice(1));(0,s.useLayoutEffect)(function(){vn(Rn)},[]);var In=(0,s.useMemo)(function(){return{showDebug:V,setShowDebug:vn,codeType:Bn,setCodeType:$n}},[V,Bn,bn]),Hn=Mn==="rtl";return(0,t.jsx)(Ot.Z.Provider,{value:In,children:(0,t.jsxs)(Vn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,t.jsx)(Xn,{fallback:null,children:(0,t.jsx)(Wt,{showDebug:V,debugDemos:bn})}),(0,t.jsxs)("article",{className:x()(hn.articleWrapper,{rtl:Hn}),children:[(a=p.frontmatter)!==null&&a!==void 0&&a.title?(0,t.jsxs)(Pe.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,t.jsxs)(Bt.Z,{gap:"small",children:[(0,t.jsx)("div",{children:(i=p.frontmatter)===null||i===void 0?void 0:i.title}),(0,t.jsx)("div",{children:(h=p.frontmatter)===null||h===void 0?void 0:h.subtitle}),!O.startsWith("/components/overview")&&(0,t.jsx)(Xn,{fallback:null,children:(0,t.jsx)(Gt,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),O.startsWith("/components/")&&(0,t.jsx)(Xn,{fallback:null,children:(0,t.jsx)($t,{pathname:O})})]}):null,(0,t.jsx)(Xn,{fallback:null,children:(0,t.jsx)(Zt,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,p.frontmatter.category==="Components"&&String(p.frontmatter.showImport)!=="false"&&(0,t.jsx)(At.Z,{source:!0,component:p.frontmatter.title,filename:p.frontmatter.filename,version:p.frontmatter.tag}),(0,t.jsx)("div",{style:{minHeight:"calc(100vh - 64px)",width:"calc(100% - 10px)"},children:y}),(0,t.jsx)(Xn,{children:(0,t.jsx)(Ht,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,t.jsx)(Xn,{fallback:(0,t.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,t.jsx)(Nt,{filename:p.frontmatter.filename})})]}),(0,t.jsx)(Xn,{fallback:null,children:(0,t.jsx)(Xt,{rtl:Hn})}),(0,t.jsx)(Ut,{})]})})},Jt=Vt,Qt=e(650010),Yt=e(361446),Xe,$e,_t=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.antCls,h=n.fontFamily,y=n.colorSplit;return{asideContainer:a(Xe||(Xe=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: `,`px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: `,`px;
          margin-bottom: `,`px;
          font-size: `,`px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-inline-start: 40px !important;

          `,`-row-rtl & {
            padding-inline-end: 40px !important;
            padding-inline-start: `,`px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-inline-start: `,`px;
            padding-inline-start: 60px;

            `,`-row-rtl & {
              padding-inline-end: 60px;
              padding-inline-start: `,`px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-inline-start: 80px !important;

            `,`-row-rtl & {
              padding-inline-end: 80px !important;
              padding-inline-start: `,`px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }
    `])),h,i,i,i,i,n.fontSize,i,i,n.margin,n.margin,n.fontSize,y,i,i,i,i,i,i,i,i,i,i,i,i,i,n.padding,i,i,n.marginXXS,i,n.padding,i,i,i,n.padding,i,i),mainMenu:a($e||($e=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),qt=function(){var n=(0,b.useSidebarData)(),a=(0,s.useContext)(ae.Z),i=a.isMobile,h=a.theme,y=_t(),p=y.styles,U=(0,Yt.Z)(),O=S()(U,2),q=O[0],sn=O[1],Mn=h.includes("dark"),on=(0,c.Fg)(),hn=on.colorBgContainer,Cn=(0,t.jsx)(J.ZP,{theme:{components:{Menu:{itemBg:hn,darkItemBg:hn}}},children:(0,t.jsx)(he.Z,{items:q,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:Mn?"dark":"light",selectedKeys:[sn],defaultOpenKeys:n==null?void 0:n.map(function(jn){var V=jn.title;return V}).filter(Boolean)})});return i?(0,t.jsx)(Qt.Z,{children:Cn},"Mobile-menu"):(0,t.jsx)(Vn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,t.jsx)("section",{className:"main-menu-inner",children:Cn})})},no=qt,Ge,eo=(0,c.kc)(function(o){var n=o.css,a=o.token;return{main:n(Ge||(Ge=m()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),to=function(n){var a=n.children,i=eo(),h=i.styles;return(0,t.jsxs)("main",{className:h.main,children:[(0,t.jsx)(ze,{}),(0,t.jsx)(no,{}),(0,t.jsx)(Jt,{children:a})]})},oo=to,ro={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},ao=function(){var n=(0,b.useOutlet)(),a=(0,dn.Z)(),i=a.pathname,h=a.search,y=a.hash,p=(0,Z.default)(ro),U=S()(p,2),O=U[0],q=U[1],sn=(0,s.useRef)(null),Mn=(0,s.useContext)(ae.Z),on=Mn.direction,hn=(0,b.useSiteData)(),Cn=hn.loading;(0,s.useLayoutEffect)(function(){q==="cn"?C().locale("zh-cn"):C().locale("en")},[]),(0,s.useEffect)(function(){var V=document.getElementById("nprogress-style");V&&(sn.current=setTimeout(function(){var vn;(vn=V.parentNode)===null||vn===void 0||vn.removeChild(V)},0))},[]),(0,s.useEffect)(function(){var V=y.replace("#","");if(V){var vn;(vn=document.getElementById(decodeURIComponent(V)))===null||vn===void 0||vn.scrollIntoView()}},[Cn,y]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+h)},[a]);var jn=s.useMemo(function(){return["","/"].some(function(V){return V===i})||["/index"].some(function(V){return i.startsWith(V)})?(0,t.jsx)(vt,{title:O.title,desc:O.description,children:n}):i.startsWith("/docs/resource")?(0,t.jsx)(Pt,{children:n}):i.startsWith("/theme-editor")?n:(0,t.jsx)(oo,{children:n})},[i,n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{encodeSpecialCharacters:!1,children:[(0,t.jsx)("html",{lang:q==="cn"?"zh-CN":q,"data-direction":on,className:x()({rtl:on==="rtl"})}),(0,t.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,t.jsx)("meta",{property:"og:description",content:O.description}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,t.jsxs)(J.ZP,{direction:on,locale:q==="cn"?l.default:void 0,children:[(0,t.jsx)(On,{}),(0,t.jsx)(ft,{}),jn]})]})},io=ao},840070:function(An,X,e){e.r(X),e.d(X,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return L},default:function(){return H}});var rn=e(97857),S=e.n(rn),fn=e(805574),x=e.n(fn),B=e(667294),C=e(900210),Sn=e(368655),s=e(359020),J=e(965516),l=e(471232),b=e(385956),Z=e(49313),dn=e(217187),Q=e(438746),m=e(513769),r=e.n(m),c=e(75529),t=e(647759),j=e(438199),v=e(785893),M=["children","theme"],cn=64,xn=38,d=function(I){var z=I.children,an=I.theme,_=r()(I,M),W=(0,B.useContext)(c.ZP.ConfigContext),en=W.getPrefixCls,wn=W.iconPrefixCls,D=en(),u=J.Z.useToken(),k=u.token,w=(0,B.useContext)(j.Z),g=w.bannerVisible;return B.useEffect(function(){c.ZP.config({theme:an})},[an]),(0,v.jsx)(t.f6,S()(S()({},_),{},{theme:an,customToken:{headerHeight:cn,bannerHeight:xn,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:k.colorFillTertiary,antCls:".".concat(D),iconCls:".".concat(wn),marginFarXS:k.marginXXL/6*7,marginFarSM:k.marginXXL/3*5,marginFar:k.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:cn+k.margin+(g?xn:0)},children:z}))},F=d,R=B.lazy(function(){return Promise.all([e.e(7898),e.e(4137),e.e(263)]).then(e.bind(e,531434))}),E=768,L="ANT_DESIGN_NOT_SHOW_BANNER",$=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return I.map(function(z){return z==="dark"?J.Z.darkAlgorithm:z==="compact"?J.Z.compactAlgorithm:null}).filter(Boolean)},A=function(){var I=(0,b.useOutlet)(),z=(0,Q.Z)(),an=z.pathname,_=(0,b.useSearchParams)(),W=x()(_,2),en=W[0],wn=W[1],D=(0,dn.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),u=x()(D,2),k=u[0],w=k.theme,g=w===void 0?[]:w,N=k.direction,tn=k.isMobile,un=k.bannerVisible,gn=un===void 0?!1:un,mn=u[1],pn=(0,B.useCallback)(function(T){mn(function(Fn){return S()(S()({},Fn),T)});var kn=en.toString(),Tn=en;Object.entries(T).forEach(function(Fn){var Nn=x()(Fn,2),Kn=Nn[0],Zn=Nn[1];if(Kn==="direction"&&(Zn==="rtl"?Tn.set("direction","rtl"):Tn.delete("direction")),Kn==="theme"){var Un;Tn=(0,b.createSearchParams)(S()(S()({},Tn),{},{theme:Zn.filter(function(Yn){return Yn!=="light"})})),(Un=document.querySelector("html"))===null||Un===void 0||Un.setAttribute("data-prefers-color",Zn.includes("dark")?"dark":"light")}}),Tn.toString()!==kn&&wn(Tn)},[en,wn]),f=function(){pn({isMobile:window.innerWidth<E})};(0,B.useEffect)(function(){var T=en.getAll("theme"),kn=en.get("direction");return mn({theme:T,direction:kn==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",T.includes("dark")?"dark":"light"),f(),window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}},[]);var P=B.useMemo(function(){return{direction:N,updateSiteConfig:pn,theme:g,isMobile:tn,bannerVisible:gn}},[tn,N,pn,g,gn]),G=B.useMemo(function(){return{algorithm:$(g),token:{motion:!g.includes("motion-off")},cssVar:!0,hashed:!1}},[g]),K=B.useState(function(){return(0,C.createCache)()}),ln=x()(K,1),Pn=ln[0];(0,b.useServerInsertedHTML)(function(){var T=(0,C.extractStyle)(Pn,{plain:!0,types:"style"});return(0,v.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:T}})}),(0,b.useServerInsertedHTML)(function(){var T=(0,C.extractStyle)(Pn,{plain:!0,types:["cssVar","token"]});return(0,v.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:T}})}),(0,b.useServerInsertedHTML)(function(){return(0,v.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,s.$Z)()}})});var On=an.startsWith("/~demos"),Ln=I;return On||(Ln=(0,v.jsxs)(l.Z,{children:[I,(0,v.jsx)(B.Suspense,{children:(0,v.jsx)(R,{value:g,onChange:function(kn){return pn({theme:kn})}})})]})),(0,v.jsx)(Z.f.Provider,{value:g.includes("dark"),children:(0,v.jsx)(C.StyleProvider,{cache:Pn,linters:[C.legacyNotSelectorLinter,C.parentSelectorLinter,C.NaNLinter],children:(0,v.jsx)(j.Z.Provider,{value:P,children:(0,v.jsx)(F,{theme:G,children:(0,v.jsx)(Sn.HappyProvider,{disabled:!g.includes("happy-work"),children:Ln})})})})})},H=A},777502:function(An,X,e){e.r(X),e.d(X,{default:function(){return R}});var rn=e(805574),S=e.n(rn),fn=e(168400),x=e.n(fn),B=e(667294),C=e(639389),Sn=e(510274),s=e(647759),J=e(630770),l=e(385956),b=e(391298),Z=e(302559),dn=e(438746),Q=e(438199),m=e(693399),r=e(785893),c="ant-where-checker",t={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function j(){var E=(0,Z.default)(t),L=S()(E,1),$=L[0],A=B.useState(!0),H=S()(A,2),Y=H[0],I=H[1];return B.useEffect(function(){var z=document.createElement("p");z.className=c,z.style.position="fixed",z.style.pointerEvents="none",z.style.visibility="hidden",z.style.width="0",document.body.appendChild(z),(0,m.updateCSS)(`
:where(.`.concat(c,`) {
  content: "__CHECK__";
}
    `),c);var an=getComputedStyle(z),_=an.content;I(String(_).includes("CHECK")),document.body.removeChild(z),(0,m.removeCSS)(c)},[]),Y?null:(0,r.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[$.whereNotSupport," ",(0,r.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:$.whereDocUrl,children:$.whereDocTitle})]})})}var v=j,M,cn,xn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},d=function(){var L=(0,B.useContext)(Q.Z),$=L.isMobile;return(0,s.kc)(function(A){var H=A.token,Y=A.css,I=new Sn.C((0,J.Z)("#f0f3fa","#fff")).onBackground(H.colorBgContainer).toHexString();return{holder:Y(M||(M=x()([`
        background: `,`;
      `])),I),footer:Y(cn||(cn=x()([`
        background: `,`;
        color: `,`;
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

        * {
          box-sizing: border-box;
        }

        h2,
        a {
          color: `,`;
        }

        .rc-footer-column {
          margin-bottom: `,`px;
          :last-child {
            margin-bottom: `,`px;
          }
        }

        .rc-footer-item-icon {
          top: -1.5px;
        }

        .rc-footer-container {
          max-width: 1208px;
          margin-inline: auto;
          padding-inline: `,`px;
        }

        .rc-footer-bottom {
          box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
          .rc-footer-bottom-container {
            font-size: `,`px;
          }
        }
      `])),I,H.colorTextSecondary,H.colorText,$?60:0,$?20:0,H.marginXXL,H.fontSize)}})()},F=function(){var L=(0,dn.Z)(),$=(0,Z.default)(xn),A=S()($,2),H=A[0],Y=A[1],I=d(),z=I.styles,an=L.getLink,_=B.useMemo(function(){var W=Y==="cn",en={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:W?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:W?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:W?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},wn={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,r.jsx)(C.AntDesignOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,r.jsx)(C.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,r.jsx)(C.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,r.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};W&&wn.items.push({icon:(0,r.jsx)(C.UsergroupAddOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:an("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var D={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,r.jsx)(C.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(C.HistoryOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:an("/changelog"),LinkComponent:l.Link},{icon:(0,r.jsx)(C.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:an("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,r.jsx)(C.BugOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,r.jsx)(C.IssuesCloseOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,r.jsx)(C.MessageOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,r.jsx)(C.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,r.jsx)(C.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},u={icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,r.jsx)(C.BgColorsOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:an("/theme-editor"),LinkComponent:l.Link}]};return[en,wn,D,u]},[Y,L.search]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{columns:_,className:z.footer,bottom:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,r.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,r.jsx)("div",{children:H.owner})]})}),(0,r.jsx)(v,{})]})},R=F},373638:function(An,X,e){e.d(X,{J1:function(){return l},Is:function(){return m},Fy:function(){return Z},KE:function(){return J},qE:function(){return b}});var rn=e(661227),S=e(805574),fn=e(97857),x=e(385564),B=e(842348),C=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),Sn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":C?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function s(r,c,t,j){var v=r.map(function(d){return d.meta}).filter(function(d){return!d.skip}),M=[],cn=function(F,R){return(F.order||0)-(R.order||0)};v.sort(cn).forEach(function(d){if(d.category&&(d.category=d.category[c]||d.category),d.type&&(d.type=d.type[c]||d.type),d!=null&&d.title&&(d.title=d.title[c]||d.title),!d.category){M.push(d);return}if(d.category==="Components"&&d.type){var F=M.find(function(L){return(L==null?void 0:L.title)===d.type});F||(F={type:"type",title:d.type,children:[],order:j[d.type]},M.push(F)),F.children=F.children||[],F.children.push(d);return}var R=M.find(function(L){return(L==null?void 0:L.title)===d.category});if(R||(R={type:"category",title:d.category,children:[],order:t[d.category]},M.push(R)),R.children=R.children||[],d.type){var E=R.children.filter(function(L){return(L==null?void 0:L.title)===d.type})[0];E||(E={type:"type",title:d.type,children:[],order:j[d.type]},R.children.push(E)),E.children=E.children||[],E.children.push(d)}else R.children.push(d)});function xn(d){return d.sort(cn).map(function(F){return F.children?_objectSpread(_objectSpread({},F),{},{children:xn(F.children)}):F})}return xn(M)}function J(r){return/-cn\/?$/.test(r)}function l(r,c,t,j){var v=r.startsWith("/")?r:"/".concat(r),M;if(c?v==="/"?M="/index-cn":v.endsWith("/")?M=v.replace(/\/$/,"-cn/"):(M="".concat(v,"-cn"),M=M.replace(/(-cn)+/,"-cn")):M=/\/?index-cn/.test(v)?"/":v.replace("-cn",""),j){var cn=j[c?"zhCN":"enUS"];M+="#".concat(cn)}return{pathname:M,search:t}}function b(r){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",t=new Image,j,v=function(cn){j||(j=!0,t.src="",r(cn))};return t.onload=function(){return v("responded")},t.onerror=function(){return v("error")},t.src=c,setTimeout(function(){return v("timeout")},1500)}function Z(){var r="test",c=window.localStorage;try{return c.setItem(r,"1"),c.removeItem(r),!0}catch(t){return!1}}function dn(r){return new Promise(function(c,t){var j=document.createElement("script");j.type="text/javascript",j.src=r,j.onload=c,j.onerror=t,document.head.appendChild(j)})}function Q(r){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(r))return"";var t=flattenDeep(r.filter(function(j){if(Array.isArray(j)){var v=_slicedToArray(j,1),M=v[0];return M==="p"}return!1}).map(function(j){var v=flatten(j),M=_toArray(v),cn=M[0],xn=M.slice(1),d=xn.filter(function(F){return typeof F=="string"&&!c.includes(F)}).join("");return[cn,d]})).find(function(j){return j&&typeof j=="string"&&!c.includes(j)});return t}var m=function(){return Sn}},647727:function(An,X,e){e.d(X,{Z:function(){return rn.Z}});var rn=e(843534)},471232:function(An,X,e){e.d(X,{Z:function(){return cn}});var rn=e(97857),S=e.n(rn),fn=e(805574),x=e.n(fn),B=e(667294),C=e(693967),Sn=e.n(C),s=e(73287),J=e(215570),l=e(269924),b=e(890887),Z=e(414466),dn=e(9783),Q=e.n(dn),m=e(286665),r=function(d){var F=d.componentCls,R=d.colorText,E=d.fontSize,L=d.lineHeight,$=d.fontFamily;return Q()({},F,{color:R,fontSize:E,lineHeight:L,fontFamily:$})},c=function(){return{}},t=(0,m.I$)("App",r,c),j=e(785893),v=function(){return B.useContext(Z.Z)},M=function(d){var F=d.prefixCls,R=d.children,E=d.className,L=d.rootClassName,$=d.message,A=d.notification,H=d.style,Y=d.component,I=Y===void 0?"div":Y,z=(0,B.useContext)(s.E_),an=z.getPrefixCls,_=an("app",F),W=t(_),en=x()(W,3),wn=en[0],D=en[1],u=en[2],k=Sn()(D,_,E,L,u),w=(0,B.useContext)(Z.J),g=B.useMemo(function(){return{message:S()(S()({},w.message),$),notification:S()(S()({},w.notification),A)}},[$,A,w.message,w.notification]),N=(0,J.Z)(g.message),tn=x()(N,2),un=tn[0],gn=tn[1],mn=(0,b.Z)(g.notification),pn=x()(mn,2),f=pn[0],P=pn[1],G=(0,l.Z)(),K=x()(G,2),ln=K[0],Pn=K[1],On=B.useMemo(function(){return{message:un,notification:f,modal:ln}},[un,f,ln]),Ln=I===!1?B.Fragment:I,T={className:k,style:H};return wn((0,j.jsx)(Z.Z.Provider,{value:On,children:(0,j.jsx)(Z.J.Provider,{value:g,children:(0,j.jsxs)(Ln,S()(S()({},I===!1?void 0:T),{},{children:[Pn,gn,P,R]}))})}))};M.useApp=v;var cn=M},86198:function(An,X,e){e.d(X,{Z:function(){return wn}});var rn=e(719632),S=e.n(rn),fn=e(9783),x=e.n(fn),B=e(805574),C=e.n(B),Sn=e(513769),s=e.n(Sn),J=e(97857),l=e.n(J),b=e(667294),Z=e(693967),dn=e.n(Z),Q=e(518475),m=e(73287),r=e(121790),c=e(45598),t=e(296708);function j(D,u,k){if(typeof k=="boolean")return k;if(D.length)return!0;var w=(0,c.default)(u);return w.some(function(g){return g.type===t.Z})}var v=e(900210),M=e(286665),cn=function(u){var k=u.componentCls,w=u.bodyBg,g=u.lightSiderBg,N=u.lightTriggerBg,tn=u.lightTriggerColor;return x()({},"".concat(k,"-sider-light"),x()(x()({background:g},"".concat(k,"-sider-trigger"),{color:tn,background:N}),"".concat(k,"-sider-zero-width-trigger"),{color:tn,background:N,border:"1px solid ".concat(w),borderInlineStart:0}))},xn=cn,d=function(u){var k=u.antCls,w=u.componentCls,g=u.colorText,N=u.triggerColor,tn=u.footerBg,un=u.triggerBg,gn=u.headerHeight,mn=u.headerPadding,pn=u.headerColor,f=u.footerPadding,P=u.triggerHeight,G=u.zeroTriggerHeight,K=u.zeroTriggerWidth,ln=u.motionDurationMid,Pn=u.motionDurationSlow,On=u.fontSize,Ln=u.borderRadius,T=u.bodyBg,kn=u.headerBg,Tn=u.siderBg;return x()(x()(x()(x()({},w,l()(l()(x()(x()(x()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:T,"&, *":{boxSizing:"border-box"}},"&".concat(w,"-has-sider"),x()({flexDirection:"row"},"> ".concat(w,", > ").concat(w,"-content"),{width:0})),"".concat(w,"-header, &").concat(w,"-footer"),{flex:"0 0 auto"}),"".concat(w,"-sider"),{position:"relative",minWidth:0,background:Tn,transition:"all ".concat(ln,", background 0s"),"&-children":x()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(k,"-menu").concat(k,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:P},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:P,color:N,lineHeight:(0,v.unit)(P),textAlign:"center",background:un,cursor:"pointer",transition:"all ".concat(ln)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:gn,insetInlineEnd:u.calc(K).mul(-1).equal(),zIndex:1,width:K,height:G,color:N,fontSize:u.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Tn,borderStartStartRadius:0,borderStartEndRadius:Ln,borderEndEndRadius:Ln,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Pn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Pn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:u.calc(K).mul(-1).equal(),borderStartStartRadius:Ln,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:Ln}}}}),xn(u)),{},{"&-rtl":{direction:"rtl"}})),"".concat(w,"-header"),x()({height:gn,padding:mn,color:pn,lineHeight:(0,v.unit)(gn),background:kn},"".concat(k,"-menu"),{lineHeight:"inherit"})),"".concat(w,"-footer"),{padding:f,color:g,fontSize:On,background:tn}),"".concat(w,"-content"),{flex:"auto",color:g,minHeight:0})},F=function(u){var k=u.colorBgLayout,w=u.controlHeight,g=u.controlHeightLG,N=u.colorText,tn=u.controlHeightSM,un=u.marginXXS,gn=u.colorTextLightSolid,mn=u.colorBgContainer,pn=g*1.25;return{colorBgHeader:"#001529",colorBgBody:k,colorBgTrigger:"#002140",bodyBg:k,headerBg:"#001529",headerHeight:w*2,headerPadding:"0 ".concat(pn,"px"),headerColor:N,footerPadding:"".concat(tn,"px ").concat(pn,"px"),footerBg:k,siderBg:"#001529",triggerHeight:g+un*2,triggerBg:"#002140",triggerColor:gn,zeroTriggerWidth:g,zeroTriggerHeight:g,lightSiderBg:mn,lightTriggerBg:mn,lightTriggerColor:N}},R=(0,M.I$)("Layout",function(D){return[d(D)]},F,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),E=e(785893),L=["prefixCls","suffixCls","className","tagName"],$=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function A(D){var u=D.suffixCls,k=D.tagName,w=D.displayName;return function(g){var N=b.forwardRef(function(tn,un){return(0,E.jsx)(g,l()({ref:un,suffixCls:u,tagName:k},tn))});return N}}var H=b.forwardRef(function(D,u){var k=D.prefixCls,w=D.suffixCls,g=D.className,N=D.tagName,tn=s()(D,L),un=b.useContext(m.E_),gn=un.getPrefixCls,mn=gn("layout",k),pn=R(mn),f=C()(pn,3),P=f[0],G=f[1],K=f[2],ln=w?"".concat(mn,"-").concat(w):mn;return P((0,E.jsx)(N,l()({className:dn()(k||ln,g,G,K),ref:u},tn)))}),Y=b.forwardRef(function(D,u){var k=b.useContext(m.E_),w=k.direction,g=b.useState([]),N=C()(g,2),tn=N[0],un=N[1],gn=D.prefixCls,mn=D.className,pn=D.rootClassName,f=D.children,P=D.hasSider,G=D.tagName,K=D.style,ln=s()(D,$),Pn=(0,Q.default)(ln,["suffixCls"]),On=b.useContext(m.E_),Ln=On.getPrefixCls,T=On.layout,kn=Ln("layout",gn),Tn=j(tn,f,P),Fn=R(kn),Nn=C()(Fn,3),Kn=Nn[0],Zn=Nn[1],Un=Nn[2],Yn=dn()(kn,x()(x()({},"".concat(kn,"-has-sider"),Tn),"".concat(kn,"-rtl"),w==="rtl"),T==null?void 0:T.className,mn,pn,Zn,Un),Vn=b.useMemo(function(){return{siderHook:{addSider:function(_n){un(function(qn){return[].concat(S()(qn),[_n])})},removeSider:function(_n){un(function(qn){return qn.filter(function(re){return re!==_n})})}}}},[]);return Kn((0,E.jsx)(r.V.Provider,{value:Vn,children:(0,E.jsx)(G,l()(l()({ref:u,className:Yn,style:l()(l()({},T==null?void 0:T.style),K)},Pn),{},{children:f}))}))}),I=A({tagName:"div",displayName:"Layout"})(Y),z=A({suffixCls:"header",tagName:"header",displayName:"Header"})(H),an=A({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(H),_=A({suffixCls:"content",tagName:"main",displayName:"Content"})(H),W=I,en=W;en.Header=z,en.Footer=an,en.Content=_,en.Sider=t.Z,en._InternalSiderContext=t.D;var wn=en},715778:function(An,X,e){e.r(X),e.d(X,{default:function(){return Z}});var rn=e(174219),S=e(97857),fn=e.n(S),x=e(585369),B={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},C=B,Sn={lang:fn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},x.Z),timePickerLocale:fn()({},C)};Sn.lang.ok="\u786E\u5B9A";var s=Sn,J=s,l="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",b={locale:"zh-cn",Pagination:rn.Z,DatePicker:s,TimePicker:C,Calendar:J,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",emptyText:"\u6682\u65E0\u6570\u636E",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",deselectAll:"\u53D6\u6D88\u5168\u9009",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},Z=b}}]);
