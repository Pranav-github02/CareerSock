import axios from 'axios'
import React, { PureComponent } from 'react'
import JobsCard from './JobsCard'
import './jobs-main.css'

class Jobs_main extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            jobs: null
        }
    }
    componentDidMount() {
        let url = `http://localhost:5000/jobs`
        axios.get(url)
            .then(res => {
                this.setState({ jobs: res.data })
            })
            .catch(err => console.error(err))
    }
    render() {
        let jobs = <p>Loading.....</p>
        if (this.state.jobs != null) {
            jobs = (
                <>
                    {
                        this.state.jobs.map((obj) =>
                            <JobsCard
                                key={obj.id}
                                title={obj.title}
                                organisation={obj.organisation}
                                logo={obj.logo}
                                location={obj.location}
                                type={obj.type}
                                salary={obj.salary}
                                sal_type={obj.sal_type}
                                desc={obj.desc}
                                skills={obj.skills}
                            />
                        )
                    }
                </>
            )
        }
        return (
            <div className='jobs-main'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
                            <div className='row'>
                                {jobs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs_main