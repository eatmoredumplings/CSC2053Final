import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';


function Documents() {

  const docs = [
    { uri: require('./sample.pdf') },
    { uri: require('./sample.pdf') },
  ];

  return (
    <div style={{marginLeft: '50px', marginTop: '50px'}}>
      <h1 style={{ fontSize: '30px' }}>Documents</h1>
      <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />;
    </div>

  );
}

export default Documents;