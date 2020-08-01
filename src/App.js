import React, { useEffect, useState } from 'react'
import './App.css'
import { Modal, Button } from 'semantic-ui-react'
import { PDFViewer } from '@react-pdf/renderer'
import { MyDoc, ReportLot } from './ReportLeanEvaluationGetData/ReportLot'
import axios from 'axios'
import html2canvas from 'html2canvas'

const PruebaMongo = () => {
  const [image, setImage] = useState(null)
  const [chart, setChart] = useState(null)
  const [chart1, setChart1] = useState(null)
  const [dataEntrance, setDataEntrance] = useState({})
  const [dataCorrals, setDataCorrals] = useState({})
  const [dataSacrifice, setDataSacrifice] = useState({})
  const [dataGeneral, setDataGeneral] = useState({})
  const [load, setLoad] = useState(true)

  const generateScreenshot = () => {
    html2canvas(document.getElementById('screen'), {
      logging: true,
      profile: true,
      useCORS: true
    }).then((canvas) => {
      const result = canvas.toDataURL('image/jpeg', 0.9)
      setImage(result)
    })
    html2canvas(document.getElementById('screenchart'), {
      logging: true,
      profile: true,
      useCORS: true
    }).then((canvas) => {
      const result = canvas.toDataURL('image/jpeg', 0.9)
      setChart(result)
    })
    html2canvas(document.getElementById('screenchart1'), {
      logging: true,
      profile: true,
      useCORS: true
    }).then((canvas) => {
      const result = canvas.toDataURL('image/jpeg', 0.9)
      setChart1(result)
    })
  }

  useEffect(() => {
    axios
      .post('https://localhost:44386/api/v1/getObjectMongo', {
        idLoteIP: 12428606,
        seccion: 'datos porteria'
      })
      .then((res) => {
        console.log(res.data)
        const dataEntrance = JSON.parse(res.data.data)
        console.log(dataEntrance)
        setDataEntrance(dataEntrance)
        axios
          .post('https://localhost:44386/api/v1/getObjectMongo', {
            idLoteIP: 12428606,
            seccion: 'corrales'
          })
          .then((res) => {
            console.log(res.data)
            const dataCorrals = JSON.parse(res.data.data)
            console.log(dataCorrals)
            setDataCorrals(dataCorrals)
            axios
              .post('https://localhost:44386/api/v1/getObjectMongo', {
                idLoteIP: 12428606,
                seccion: 'sacrificio'
              })
              .then((res) => {
                console.log(res.data)
                const dataSacrifice = JSON.parse(res.data.data)
                console.log(dataSacrifice)
                setDataSacrifice(dataSacrifice)
                axios
                  .post('https://localhost:44386/api/v1/getObjectMongo', {
                    idLoteIP: 12428606,
                    seccion: 'datos generales'
                  })
                  .then((res) => {
                    setLoad(false)
                    console.log(res.data)
                    const dataGeneral = JSON.parse(res.data.data)
                    console.log(dataGeneral)
                    setDataGeneral(dataGeneral)
                  })
                  .catch((err) => console.error(err))
              })
              .catch((err) => console.error(err))
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  }, [])
  if (load) return 'Cargando....'
  return (
    <div>
      <div style={{ position: 'absolute', left: '1111111px' }}>
        {dataEntrance && dataCorrals && dataSacrifice && dataGeneral && (
          <ReportLot
            url={{
              dataEntrance,
              dataCorrals,
              dataSacrifice,
              dataGeneral
            }}
          />
        )}
      </div>
      <Modal
        trigger={
          <Button
            onClick={() => {
              generateScreenshot()
            }}
          >
            modal
          </Button>
        }
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {image &&
              chart &&
              chart1 &&
              dataEntrance &&
              dataCorrals &&
              dataSacrifice &&
              dataGeneral && (
                <PDFViewer style={{ width: '100%', height: '130vh' }}>
                  <MyDoc
                    url={{
                      image,
                      chart,
                      chart1,
                      dataEntrance,
                      dataCorrals,
                      dataSacrifice,
                      dataGeneral
                    }}
                  />
                </PDFViewer>
              )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default PruebaMongo
