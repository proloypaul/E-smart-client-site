import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(() => {
        fetch('https://limitless-shelf-68611.herokuapp.com/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

    return {
        courses,
    }
}

export default useCourses;