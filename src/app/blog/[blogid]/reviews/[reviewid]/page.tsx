export default function ReviewDetails({params}:{
    params:{
        blogid:String,
        reviewid:String
    }
}


)


{
    console.log(params,"params")

    return(
        <>
        <h1>
            Review {params.reviewid} for the Blog {params.blogid}
        </h1>
        
        </>
    )
}