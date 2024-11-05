import React, { useState, useInsertionEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

export default function PropertyFullDetail() {


    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  
    let loader = useLoaderData()


    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
        
    </div>
    )
}
