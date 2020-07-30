import React, { useEffect, useState } from 'react'
import './App.css'
import { Modal, Button } from 'semantic-ui-react'
import { PDFViewer } from '@react-pdf/renderer'
import { MyDoc } from './ReportLeanEvaluationGetData/ReportLot'
import axios from 'axios'

const PruebaMongo = () => {
  const [dataEntrance, setDataEntrance] = useState({})
  const [dataCorrals, setDataCorrals] = useState({})
  const [dataSacrifice, setDataSacrifice] = useState({})
  const [dataGeneral, setDataGeneral] = useState({})

  const LoadDataEntrance = () => {
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
      })
      .catch((err) => console.error(err))
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
      })
      .catch((err) => console.error(err))
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
      })
      .catch((err) => console.error(err))
    axios
      .post('https://localhost:44386/api/v1/getObjectMongo', {
        idLoteIP: 12428606,
        seccion: 'datos generales'
      })
      .then((res) => {
        console.log(res.data)
        const dataGeneral = JSON.parse(res.data.data)
        console.log(dataGeneral)
        setDataGeneral(dataGeneral)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    LoadDataEntrance()
  }, [])

  const LoadDataReport = () => {
    setTimeout(() => {
      LoadDataEntrance()
    }, 1000)
  }

  return (
    <div>
      <Modal
        trigger={
          <Button
            onClick={() =>
              LoadDataReport(
                dataEntrance,
                dataCorrals,
                dataSacrifice,
                dataGeneral
              )
            }
          >
            modal
          </Button>
        }
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {dataEntrance && dataCorrals && dataSacrifice && dataGeneral && (
              <PDFViewer style={{ width: '100%', height: '130vh' }}>
                <MyDoc
                  url={{
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
