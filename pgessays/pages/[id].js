import essays from '../data'


export const getStaticPaths = async () => {

    const paths = essays.map(essay => {
        return{
            params: {id: essay.id.toString()}
        }
    })
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch ('https://raw.githubusercontent.com/liamcloud/pgessays/master/pgessays/pages/essays.json' + id)
    const data = await res.json()
    return {
        props:{essay: data}
    }
}

const Details = ({essay})=>{
    return(
        <div>
            <h1>{essay.title}</h1>
        </div>
    )
}

export default Details