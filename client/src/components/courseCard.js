import React from 'react'

const courseCard = () => {
    return (
        <>
            <div style={{ marginLeft: '130px', marginBottom: '10px', marginTop: '100px' }}>
                <h3>List of subjects</h3>
            </div>

            <div className="container" style={{ marginBottom: '10px' }}>
                <div className="card">
                    <div className="card-header" style={{ backgroundColor: '#eeeeee' }}>
                        Subject name
    </div>
                    <div className="card-body">
                        <p className="card-title">Year: </p>
                        <a href="/" className="btn btn-primary">View Topics</a>
                        <a href="/" className="btn btn-primary">View Topic</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default courseCard