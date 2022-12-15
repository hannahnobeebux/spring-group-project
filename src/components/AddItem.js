import react from 'react';
import {useForm} from 'react-hook-form';


export default function AddItem() {

    const {register, handleSubmit, formState: {errors}} = useForm({default});

    console.log(errors)

    return (
        <>
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input {...register("name", {required: "This is required"})}placeholder="Title"/>
            <p>{errors.name?.message}</p>
            {/* <input {...register("image", {required: "This is required"})}placeholder="Image url"/>
            <p>{errors.image?.message}</p>
            <input {...register("description", {required: "This is required"})}placeholder="Description"/>
            <p>{errors.description?.message}</p>
            <input {...register("category", {required: "This is required"})}placeholder="Category"/>
            <p>{errors.category?.message}</p>
            <input {...register("quantity", {required: "This is required"})}placeholder="Quantity"/>
            <p>{errors.quantity?.message}</p>
            <input {...register("price", {required: "This is required"})}placeholder="Price"/>
            <p>{errors.price?.message}</p> */}
            <input type="submit" />
        </form>
        
        </>

    )
}