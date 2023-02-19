import axios from "axios";
import { BACKEND_URL } from "./constant.service";

export async function getPacket(packet_id){
    return axios.get(`${BACKEND_URL}/api/packets/${packet_id}`)
}

export async function getAllPackets(){
    return axios.get(`${BACKEND_URL}/api/packets`)
}

export async function updatePacket(packet_id,body){
    return axios.put(`${BACKEND_URL}/api/packets/${packet_id}`,body)
}

export async function createPacket(body){
    return axios.post(`${BACKEND_URL}/api/packets`,body)
}

export async function deletePacket(packet_id){
    return axios.delete(`${BACKEND_URL}/api/packets/${packet_id}`)
}