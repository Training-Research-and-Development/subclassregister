"use client";
import React ,{ useState, useEffect, useCallback, ChangeEvent  } from 'react';
import {
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  List,
  Divider,
} from "@mui/material";
import Image from "next/image";

interface classData {
  ID: number;
  RoomName: string;
  ClassSubject: string;
  learning_day: string;
  learning_time: string;
  instructor: string;
}

interface classList {
  trdclass: Array<classData>;
}

let data = {
  trdclass: [
    {
      ID: 1,
      RoomName: "605 Tower FL.4",
      ClassSubject: "พระราชกรณียกิจที่สำคัญของแต่ละรัชกาลในราชวงศ์จักรี",
      learning_day: "2023-10-09",
      learning_time: "09.00 น. - 12.00 น.",
      instructor: "ศ.ดร.ม.ร.ว.สุริยวุฒิ สุขสวัสดิ์",
    },
    {
      ID: 2,
      RoomName: "605 Tower FL.4",
      ClassSubject:
        "พระราชพิธีบรมราชาภิเษก, เกร็ดความรู้ทั่วไป (เครื่องราชอิสริยาภรณ์, ธงพระอิสริยยศ ฯลฯ",
      learning_day: "2023-10-09",
      learning_time: "13.00 น. - 16.00 น.",
      instructor: "ศ.ดร.ม.ร.ว.สุริยวุฒิ สุขสวัสดิ์",
    },
    {
      ID: 3,
      RoomName: "605 Tower FL.4",
      ClassSubject: "บทบาทของสถาบันพระมหากษัตริย์ไทย ในการพัฒนาประเทศ",
      learning_day: "0000-00-00",
      learning_time: "13.00 น. - 16.00 น.",
      instructor: "dsaf",
    },
  ],
};

export default function Home() {
  const [seminarclass, setSeminarClass] = useState<Array<number>>([])

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    let x = seminarclass
    const index = x.indexOf(parseInt(event.target.value))
                          if (index > -1) { // only splice array when item is found
                            x.splice(index, 1); // 2nd parameter means remove one item only
                          }
    setSeminarClass([...x, parseInt(event.target.value)])
  }

  

  useEffect(() => {
    // Update the document title using the browser API
    setSeminarClass(seminarclass)
    
  },[seminarclass]);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="bg-hero bg-contain bg-no-repeat w-96 h-56"></div>
      <p className="text-2xl">เลือกวิชาที่ต้องการลงทะเบียน</p>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ ml: 2, pr: 2 }}
        >
          {data.trdclass.map((item, index) => {
            return (
              <List key={index}>
                <FormControlLabel
                  value={item.ID}
                  control={
                    <Checkbox 
                      checked={seminarclass.includes(item.ID)}
                      onChange={onFieldChange}
                      // onChange={()=> {
                      //   let x = seminarclass
                      //   if(!x.includes(item.ID)){
                      //     x.push(item.ID)
                      //     setSeminarClass(x)  
                      //   }else {
                      //     const index = x.indexOf(item.ID)
                      //     if (index > -1) { // only splice array when item is found
                      //       x.splice(index, 1); // 2nd parameter means remove one item only
                      //     }
                      //     setSeminarClass(x)
                      //   }
                      // }}

                    />
                  }
                  label={`เรื่อง ${item.ClassSubject} วิทยากร: ${item.instructor} วัน: ${item.learning_day} เวลา: ${item.learning_time} สถานที่: ${item.RoomName}`}
                  //
                />
                <Divider variant="middle" component="li" />
              </List>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
