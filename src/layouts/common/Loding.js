export default function Loading(){
  const mystyle = {
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: '16px',
    color: 'black'
  };

    return(
        <div className="box box-danger">
            
            <div style={mystyle} className="box-body">
              در حال بارگذاری...
            </div>
            <div className="overlay">
              <i className="fa fa-refresh fa-spin"></i>
            </div>
          </div>
    )
}