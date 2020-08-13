import React, { useEffect, useState } from 'react'
import './App.css'
import { Modal, Button } from 'semantic-ui-react'
import { PDFViewer } from '@react-pdf/renderer'
import { MyDoc, ReportLot } from './ReportBalanceTicketGetData/ReportLot'
import axios from 'axios'
import html2canvas from 'html2canvas'

const RequestReportLeanEvaluation = () => {
  const [image, setImage] = useState(null)
  const [dataEntrance, setDataEntrance] = useState({})
  const [dataCorrals, setDataCorrals] = useState({})
  const [getidLotes, setGetidLotes] = useState([])
  const [load, setLoad] = useState(true)
  const [open, setOpen] = useState(false)
  const [getCodeLot, setGetCodeLot] = useState([])

  const generateScreenshot = () => {
    html2canvas(document.getElementById('screen'), {
      logging: true,
      profile: true,
      useCORS: true
    }).then((canvas) => {
      const result = canvas.toDataURL('image/jpeg', 0.9)
      setImage(result)
    })
  }

  const openModal = (value, value2) => {
    setGetCodeLot(value2)
    axios
      .post('https://localhost:44386/api/v1/getObjectMongo', {
        idLoteIP: value,
        seccion: 'datos porteria'
      })
      .then((res) => {
        console.log(res.data)
        setDataEntrance(JSON.parse(res.data.data))
        console.log(JSON.parse(res.data.data))
        axios
          .post('https://localhost:44386/api/v1/getObjectMongo', {
            idLoteIP: value,
            seccion: 'corrales'
          })
          .then((res) => {
            console.log(res.data)
            setDataCorrals(JSON.parse(res.data.data))
            console.log(JSON.parse(res.data.data))
            setLoad(false)
            generateScreenshot()
            setOpen(true)
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    axios
      .post('https://localhost:44386/api/v1/getIdsLotes', {
        fechaInicial: '2019-10-07T07:26:00.000+00:00',
        fechaFinal: '2019-10-07T10:03:00.000+00:00'
      })
      .then((res) => {
        setGetidLotes(JSON.parse(res.data))
      })
      .catch((err) => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div style={{ position: 'absolute', left: '1111111px' }}>
        {!load && (
          <ReportLot
            url={{
              dataEntrance,
              dataCorrals
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
            Ver
          </Button>
        }
      >
        <Modal.Header>Visor de pdf</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {image && dataEntrance && dataCorrals && getCodeLot && (
              <PDFViewer style={{ width: '100%', height: '130vh' }}>
                <MyDoc
                  url={{
                    image,
                    dataEntrance,
                    dataCorrals
                  }}
                />
              </PDFViewer>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>

      {!load && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => openModal()}
          open={open}
        >
          <Modal.Header>Visor de pdf</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {image &&
                dataEntrance &&
                dataCorrals &&
                getidLotes &&
                getCodeLot && (
                  <PDFViewer style={{ width: '100%', height: '130vh' }}>
                    <MyDoc
                      url={{
                        image,
                        dataEntrance,
                        dataCorrals,
                        getidLotes,
                        getCodeLot
                      }}
                    />
                  </PDFViewer>
                )}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      )}
      <table>
        {getidLotes &&
          Array.isArray(getidLotes) &&
          getidLotes.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.CodigoLote}</td>
                <td>
                  <Button
                    onClick={() => {
                      openModal(item.LoteID, item.CodigoLote)
                    }}
                  >
                    Ver
                  </Button>
                </td>
              </tr>
            )
          })}
      </table>
    </div>
  )
}

export default RequestReportLeanEvaluation
