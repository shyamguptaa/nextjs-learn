export default function Docs({params}:{params:{slug:String[]}}){


    if(params.slug?.length===2){
        return(
            <h1>
                Viewing docs for the feature {params.slug[0]} and concept{params.slug[1]}
            </h1>
        )
    }
    else{
    return <h1>Hello from slugs</h1>
    }
}