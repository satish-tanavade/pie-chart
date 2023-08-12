import React, { useEffect, useState } from 'react'
import Chart from "chart.js/auto"

function Piechart() {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [error, setError] = useState('')

    const handleChange1 = (e) =>{
        setInput1(e.target.value)
    }

    useEffect(() =>{
        if(input1 !== ''){
            setInput2(100 - Number(input1))
        }
    }, [input1])

    const handleChange2 = (e) =>{
        setInput2(e.target.value)
    }

    useEffect(() =>{
        if(input2 !== ''){
            setInput1(100 - Number(input2))
        }
    }, [input2])


    const createChart = (e) => {
        e.preventDefault()
        const createChart = document.getElementById("chart");
        if (!error & input1 !== '') {
            new Chart(createChart, {
                type: 'pie',
                data: {
                    labels: ["Input1", "Input2"],
                    datasets: [{
                        label: "Chart Data",
                        data: [input1, input2],
                        backgroundColor: ['orange', 'yellow'],
                    }]
                },
            });
        }else{
            alert('Please Enter Value')
        } 
    }

    useEffect(() => {
        if (input1 > 100 || input2 > 100) {
            setError('Please enter proper value.')
        } else {
            setError('')
        }
    }, [input1, input2])

    const styles = {height:'600px', width:'450px', margin: '30px auto'}
  return (
    <>

        <form onSubmit={createChart}>
            <div className='offset-sm-2 row d-flex mt-3'>
                <div className='form-group col-sm-3'>
                    <label>Box1</label>
                    <input value={input1} onChange={handleChange1} type='text' id='box1' className='form-control'/>
                    <p className='text-danger'>{error}</p>
                </div>

                <div className='form-group col-sm-3'>
                    <label>Box2</label>
                    <input  value={input2} onChange={handleChange2} type='text' id='box2' className='form-control'/>
                </div>

                <div className='col-sm-2 mt-4'>
                    <button className='btn btn-success ' type='submit'>Create Chart</button>
                </div>
            </div>
        </form>


        <div style={styles}>
            <canvas id='chart'>

            </canvas>
        </div>
    </>
  )
}

export default Piechart