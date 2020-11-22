(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(0),u=n.n(r),l=n(25),o=n.n(l),c=n(71),i=n(23),s=n.n(i),b=n(27),m=n(35),d=n(7),f=n(47),v=n(9),h=n(20);function E(){var e=Object(h.a)(["\n  subscription {\n    bookAdded {\n      ...BookDetails\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function j(){var e=Object(h.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n  mutation editAuthor($name: String!, $setBornTo: Int!) {\n    editAuthor(name: $name, setBornTo: $setBornTo) {\n      ...AuthorDetails\n    }\n  }\n  ","\n"]);return O=function(){return e},e}function p(){var e=Object(h.a)(["\n  mutation createBook(\n    $title: String!\n    $author: String!\n    $published: Int!\n    $genres: [String!]!\n  ) {\n    addBook(\n      title: $title\n      author: $author\n      published: $published\n      genres: $genres\n    ) {\n      ...BookDetails\n    }\n  }\n  ","\n"]);return p=function(){return e},e}function g(){var e=Object(h.a)(["\n  query me {\n    me {\n      username\n      favoriteGenre\n      id\n    }\n  }\n"]);return g=function(){return e},e}function k(){var e=Object(h.a)(["\n  query getBooks($genre: String, $author: String) {\n    allBooks(genre: $genre, author: $author) {\n      ...BookDetails\n    }\n  }\n  ","\n"]);return k=function(){return e},e}function y(){var e=Object(h.a)(["\n  query {\n    allAuthors {\n      ...AuthorDetails\n    }\n  }\n  ","\n"]);return y=function(){return e},e}function w(){var e=Object(h.a)(["\n  fragment BookDetails on Book {\n    title\n    author {\n      ...AuthorDetails\n    }\n    published\n    genres\n    id\n  }\n  ","\n"]);return w=function(){return e},e}function S(){var e=Object(h.a)(["\n  fragment AuthorDetails on Author {\n    name\n    born\n    bookCount\n    id\n  }\n"]);return S=function(){return e},e}var B=Object(v.gql)(S()),C=Object(v.gql)(w(),B),$=Object(v.gql)(y(),B),A=Object(v.gql)(k(),C),q=Object(v.gql)(g()),D=Object(v.gql)(p(),C),Q=Object(v.gql)(O(),B),L=Object(v.gql)(j()),x=Object(v.gql)(E(),C),I=function(e){var t=e.authors,n=Object(r.useState)(""),a=Object(d.a)(n,2),l=a[0],o=a[1],c=Object(r.useState)(null),i=Object(d.a)(c,2),s=i[0],b=i[1],m=Object(v.useMutation)(Q,{onError:function(e){console.log(e)}}),h=Object(d.a)(m,1)[0],E=t.map((function(e){return{value:e.name,label:e.name}}));return u.a.createElement("div",null,u.a.createElement("h3",null,"Set birth year"),u.a.createElement(f.a,{defaultValue:s,onChange:b,options:E}),u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:s.value,setBornTo:Number(l)};h({variables:t}),o(""),b(null)}},"born",u.a.createElement("input",{type:"number",value:l,onChange:function(e){var t=e.target;return o(t.value)}}),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"update author"))))},z=function(e){var t=e.show,n=e.authors;return t&&n!==[]?u.a.createElement("div",null,u.a.createElement("h2",null,"authors"),u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,"born"),u.a.createElement("th",null,"books")),n.map((function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,e.name),u.a.createElement("td",null,e.born),u.a.createElement("td",null,e.bookCount))})))),u.a.createElement(I,{authors:n})):null},G=function(e){var t=e.show,n=e.books,a=Object(r.useState)(null),l=Object(d.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)([]),s=Object(d.a)(i,2),b=s[0],h=s[1],E=Object(v.useLazyQuery)(A),j=Object(d.a)(E,2),O=j[0],p=j[1];if(Object(r.useEffect)((function(){h(n)}),[n]),Object(r.useEffect)((function(){O({variables:{genre:null===o||void 0===o?void 0:o.value}})}),[o,O]),Object(r.useEffect)((function(){p.data&&h(p.data.allBooks)}),[p.data]),!t||b===[])return null;var g=n.map((function(e){return e.genres})),k=Object(m.a)(new Set(g.flat())).map((function(e){return{value:e,label:e}}));return k.unshift({value:null,label:"--show all--"}),u.a.createElement("div",null,u.a.createElement("h2",null,"books"),u.a.createElement("p",null,"in genre ",u.a.createElement("b",null,null===o||void 0===o?void 0:o.value)),u.a.createElement("div",null,u.a.createElement(f.a,{defaultValue:o,onChange:c,options:k})),u.a.createElement("div",null,u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,"author"),u.a.createElement("th",null,"published")),b.map((function(e){return u.a.createElement("tr",{key:e.title},u.a.createElement("td",null,e.title),u.a.createElement("td",null,e.author.name),u.a.createElement("td",null,e.published))}))))))},T=function(e){var t=e.show,n=e.handleNewBook,a=Object(r.useState)(""),l=Object(d.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(""),m=Object(d.a)(i,2),f=m[0],v=m[1],h=Object(r.useState)(""),E=Object(d.a)(h,2),j=E[0],O=E[1],p=Object(r.useState)(""),g=Object(d.a)(p,2),k=g[0],y=g[1],w=Object(r.useState)([]),S=Object(d.a)(w,2),B=S[0],C=S[1];if(!t)return null;var $=function(){var e=Object(b.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={title:o,author:f,published:Number(j),genres:B},n(a),c(""),O(""),v(""),C([]),y("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:$},u.a.createElement("div",null,"title",u.a.createElement("input",{value:o,onChange:function(e){var t=e.target;return c(t.value)}})),u.a.createElement("div",null,"author",u.a.createElement("input",{value:f,onChange:function(e){var t=e.target;return v(t.value)}})),u.a.createElement("div",null,"published",u.a.createElement("input",{type:"number",value:j,onChange:function(e){var t=e.target;return O(t.value)}})),u.a.createElement("div",null,u.a.createElement("input",{value:k,onChange:function(e){var t=e.target;return y(t.value)}}),u.a.createElement("button",{onClick:function(){C(B.concat(k)),y("")},type:"button"},"add genre")),u.a.createElement("div",null,"genres: ",B.join(" ")),u.a.createElement("button",{type:"submit"},"create book")))},M=function(e){var t=e.show,n=e.handleLogin,a=Object(r.useState)(""),l=Object(d.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(""),m=Object(d.a)(i,2),f=m[0],v=m[1];if(!t)return null;var h=function(){var e=Object(b.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(o,f),c(""),v("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:h},u.a.createElement("div",null,"username:",u.a.createElement("input",{type:"text",id:"username",value:o,onChange:function(e){var t=e.target;return c(t.value)}})),u.a.createElement("div",null,"password:",u.a.createElement("input",{type:"password",id:"password",value:f,onChange:function(e){var t=e.target;return v(t.value)}})),u.a.createElement("button",{type:"submit"},"login")))},N=function(e){var t=e.show,n=e.favoriteBooks,a=e.favoriteGenre;return t&&n!==[]?u.a.createElement("div",null,u.a.createElement("h2",null,"recommendations"),u.a.createElement("p",null,"books in your favorite genre ",u.a.createElement("b",null,a)),u.a.createElement("div",null,u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,"author"),u.a.createElement("th",null,"published")),n.map((function(e){return u.a.createElement("tr",{key:e.title},u.a.createElement("td",null,e.title),u.a.createElement("td",null,e.author.name),u.a.createElement("td",null,e.published))})))))):null},J=function(){var e=Object(r.useState)("authors"),t=Object(d.a)(e,2),n=t[0],l=t[1],o=Object(r.useState)(null),c=Object(d.a)(o,2),i=c[0],f=c[1],h=Object(r.useState)([]),E=Object(d.a)(h,2),j=E[0],O=E[1],p=Object(r.useState)([]),g=Object(d.a)(p,2),k=g[0],y=g[1],w=Object(r.useState)([]),S=Object(d.a)(w,2),B=S[0],C=S[1],Q=Object(r.useState)(null),I=Object(d.a)(Q,2),J=I[0],V=I[1],H=Object(v.useApolloClient)(),P=function(e){var t=H.readQuery({query:A});if(!t.allBooks.some((function(t){return t.id===e.id}))){H.writeQuery({query:A,data:Object(a.a)(Object(a.a)({},t),{},{allBooks:[].concat(Object(m.a)(t.allBooks),[e])})});var n={allAuthors:H.readQuery({query:$}).allAuthors.map((function(e){return Object(a.a)({},e)}))},r=n.allAuthors.find((function(t){return t.name===e.author.name}));r?r.bookCount+=1:n.allAuthors=[].concat(Object(m.a)(n.allAuthors),[e.author]),H.writeQuery({query:$,data:n})}},F=Object(v.useLazyQuery)($),K=Object(d.a)(F,2),R=K[0],U=K[1],W=Object(v.useLazyQuery)(A),X=Object(d.a)(W,2),Y=X[0],Z=X[1],_=Object(v.useLazyQuery)(A),ee=Object(d.a)(_,2),te=ee[0],ne=ee[1],ae=Object(v.useLazyQuery)(q,{onError:function(e){console.log(e)}}),re=Object(d.a)(ae,2),ue=re[0],le=re[1],oe=Object(v.useMutation)(L),ce=Object(d.a)(oe,1)[0],ie=Object(v.useMutation)(D,{update:function(e,t){P(t.data.addBook)},onError:function(e){console.log(e)}}),se=Object(d.a)(ie,1)[0];Object(v.useSubscription)(x,{onSubscriptionData:function(e){var t=e.subscriptionData.data.bookAdded;window.alert("new book ".concat(t," added")),P(t)}}),Object(r.useEffect)((function(){R(),Y();var e=localStorage.getItem("token");e&&f(e)}),[R,Y]),Object(r.useEffect)((function(){le.data&&(V(le.data.me),te({variables:{genre:null===J||void 0===J?void 0:J.favoriteGenre}}))}),[le.data,J,te]),Object(r.useEffect)((function(){U.data&&O(U.data.allAuthors)}),[U.data]),Object(r.useEffect)((function(){Z.data&&y(Z.data.allBooks)}),[Z.data]),Object(r.useEffect)((function(){ne.data&&C(ne.data.allBooks)}),[ne.data]);var be={display:i?"none":""},me={display:i?"":"none"},de=function(){var e=Object(b.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce({variables:{username:t,password:n}});case 3:a=e.sent,localStorage.setItem("token",a.data.login.value),f(a.data.login.value),l("add"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return l("authors")}},"authors"),u.a.createElement("button",{onClick:function(){return l("books")}},"books"),u.a.createElement("button",{style:be,onClick:function(){return l("login")}},"login"),u.a.createElement("button",{style:me,onClick:function(){return l("add")}},"add book"),u.a.createElement("button",{style:me,onClick:function(){ue(),l("recommend")}},"recommend"),u.a.createElement("button",{style:me,onClick:function(){H.resetStore(),l("login"),setTimeout((function(){return localStorage.clear()}),100),f(null)}},"logout")),u.a.createElement(z,{show:"authors"===n,authors:j}),u.a.createElement(G,{show:"books"===n,books:k,getBooks:Y}),u.a.createElement(T,{show:"add"===n,handleNewBook:function(e){se({variables:e})}}),u.a.createElement(M,{show:"login"===n,handleLogin:de}),u.a.createElement(N,{show:"recommend"===n,favoriteGenre:null===J||void 0===J?void 0:J.favoriteGenre,favoriteBooks:B}))},V=n(2),H=n(69),P=Object(c.a)((function(e,t){var n=t.headers,r=localStorage.getItem("token");return{headers:Object(a.a)(Object(a.a)({},n),{},{authorization:r?"bearer ".concat(r):null})}})),F=new v.HttpLink({uri:"/"}),K=new H.a({uri:"ws:///graphql",option:{reconnect:!0}}),R=Object(v.split)((function(e){var t=e.query,n=Object(V.p)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),K,P.concat(F)),U=new v.ApolloClient({cache:new v.InMemoryCache,link:R});o.a.render(u.a.createElement(v.ApolloProvider,{client:U},u.a.createElement(J,null)),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.5574ed4a.chunk.js.map