webpackJsonp([15],{1415:function(e,n,t){var r=t(0),a=t(8),s=t(9).PageRenderer;s.__esModule&&(s=s.default);var o=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1448)}},componentWillMount:function(){},render:function(){return r.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,e.exports=o},1448:function(e,n){e.exports="If you want to override the default elements, pass a React component through the `renderers` prop. It should render passed props like this:\n\n```javascript\nconst wrapper = props => <div {...props} className=\"table\" />;\n\n...\n\n<Table.Provider renderers={{ table: wrapper }} ...>\n  <Table.Body rows={rows} rowKey=\"id\" />\n</Table.Provider>\n```\n\nNote that the example discard possible `className` as it overrides so you may want to merge it using a utility such as [classnames](https://www.npmjs.com/package/classnames).\n\nThe defaults are as follows:\n\n```javascript\n{\n  renderers: {\n    table: 'table',\n    header: {\n      wrapper: 'thead',\n      row: 'tr',\n      cell: 'th'\n    },\n    body: {\n      wrapper: 'tbody',\n      row: 'tr',\n      cell: 'td'\n    }\n  }\n};\n```\n\n## See Also\n\n* [Fixed Width Columns](/examples/fixed-width-columns)\n"}});