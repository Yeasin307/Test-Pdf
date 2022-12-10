import React from 'react';
import { Page, Text, Document, Image, StyleSheet } from '@react-pdf/renderer';
import logo from "../logo.png";

const PdfDocument = ({ single }) => {

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        name: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Times-Roman'
        },
        title: {
            fontSize: 16,
            margin: 12,
            fontFamily: 'Times-Roman'
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        description: {
            margin: 12,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.name}>{single.name}</Text>
                <Text style={styles.title}>{single.title}</Text>
                <Image
                    style={styles.image}
                    src={logo}
                />
                <Text style={styles.description}>{single.description}</Text>
            </Page>
        </Document>
    );
};

export default PdfDocument;