import React from 'react'

export const HeaderToDo = () => {
    return (
        <div className="row">
            <div className="col-md headerText text-center my-5">
                <h2 className="mb-4 mt-5">Hello, اهلاً , Hola!! <span role="img" aria-label="smile">😃</span></h2>
                <p className="lead mb-0">With no <strong>sign-in/up</strong> rquired you can list your todos.</p>
                <p className="lead">
                    Don't worry you can't lose the list even if you reload the app. <strong>Enjoy <span role="img" aria-label="rocket">🚀</span></strong>
                </p>
            </div>
        </div>
    )
}
