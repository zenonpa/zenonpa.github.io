<?php
//============================================================+
// File name   : CIOMS.php
// Begin       : 2015-03-04
// Last Update : 2013-05-14
//
// Description : CIOMS Report for PV-Safety Manager
//
// Author: Ysrael Paredes / Jürgen Schulberger
//
// (c) Copyright:
//               CTS Clinical Trial Service GmbH
//============================================================+


// Include the main TCPDF library (search for installation path).
require_once('tcpdf_include.php');

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
//$pdf->SetCreator(PDF_CREATOR);
//$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('TCPDF CIOMS I Report Form');
$pdf->SetSubject('TCPDF CIOMS Reporting');
$pdf->SetKeywords('TCPDF, PDF, CIOMS, Report, PV');

// set default header data
//$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 007', PDF_HEADER_STRING);

// set header and footer fonts
//$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
//$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
//$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);



// set auto page breaks
//$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM); // PDF_MARGIN_BOTTOM => 25
$pdf->SetAutoPageBreak(TRUE, 3);

// set image scale factor
//$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
	require_once(dirname(__FILE__).'/lang/eng.php');
	$pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

//Variables filled by DB
$txt1 = 'X';
$txt2 = '   ';
$txt3 = '   ';

$txt4 = '     ';
$txt5 = '     ';
$txt6 = 'X   ';

// set font
$pdf->SetFont('helvetica', 'B', 8);  //no existe arial.. usar.. helvetica

// add a page
$pdf->AddPage();

//$pdf->Rect(125, 160, 40, 10, 'D');

//xpos,ypos, width, height
$pdf->Rect(15, 12, 180, 270, 'D');   //Borde Pagina

$pdf->Rect(90, 12, 105, 5, 'D'); //Cabecera1stPage
$pdf->Rect(90, 17, 105, 5, 'D'); //Cabecera1stPage
$pdf->Rect(90, 22, 105, 5, 'D'); //Cabecera1stPage
$pdf->Rect(15, 27, 180, 5, 'D'); //Cabecera1stPage

$pdf->Rect(139, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(143, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(147, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(151, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(155, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(159, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(163, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(167, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(171, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(175, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(179, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(183, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(187, 22, 4, 5, 'D'); //Cabecera1stPage
$pdf->Rect(191, 22, 4, 5, 'D'); //Cabecera1stPage



$pdf->Text(16, 14, 'Suspect Adverse Reaction Report');


$style4 = array('L' =>  array('width' => 0.20,  'color' => array(0, 0, 0)),
                'T' => 0,
                'R' =>  array('width' => 0.20,  'color' => array(0, 0, 0)),
                'B' => 0);

//$pdf->Rect(15, 27.15, 180, 5, 'DF', $style1, array(220, 255, 255));
$pdf->SetFont('helvetica', '', 7);
$pdf->Text(85, 27.85, 'I. REACTION INFORMATION');
$pdf->Text(14.5, 43, '7 + 13 DESCRIBE REACTION(S) (including relevant tests/lab data)');

$pdf->Rect(15, 32.15, 140, 10, 'D'); //SECTION_I
$pdf->Rect(50, 32.15, 20, 10, 'D'); //SECTION_I
$pdf->Rect(70, 32.15, 30, 10, 'D'); //SECTION_I
$pdf->Rect(70, 35.35, 10, 6.8, 'D'); //SECTION_I_day
$pdf->Rect(80, 35.35, 10, 6.8, 'D'); //SECTION_I_month
$pdf->Rect(90, 35.35, 10, 6.8, 'D'); //SECTION_I_year
$pdf->SetFont('helvetica', '', 7);

$pdf->Text(70, 35.25, 'Day');
$pdf->Text(80, 35.25, 'Month');
$pdf->Text(90, 35.25, 'Year');

$pdf->Rect(100, 32.15, 13, 10, 'D'); //SECTION_I
$pdf->Rect(125, 32.15, 30, 10, 'D'); //SECTION_I
$pdf->Rect(125, 35.35, 10, 6.8, 'D'); //SECTION_I_day
$pdf->Rect(135, 35.35, 10, 6.8, 'D'); //SECTION_I_month
$pdf->Rect(145, 35.35, 10, 6.8, 'D'); //SECTION_I_year
$pdf->Text(125, 35.25, 'Day');
$pdf->Text(135, 35.25, 'Month');
$pdf->Text(145, 35.25, 'Year');

$pdf->Rect(155, 32.15, 40, 60.28, 'D'); //8.-12 CHECK ALL..
$pdf->Text(14.5, 32.5, '1. PATIENT INITIALS');
$pdf->Text(21, 35.25, '(first, last)');

$pdf->Text(50, 32.5, '1a. COUNTRY');
$pdf->Text(70, 32.5, '2. DATE OF BIRTH');
$pdf->Text(100, 32.5, '2a. AGE');
$pdf->Text(113, 32.5, '3. SEX');
$pdf->Text(124.5, 32.5, '4-6. REACTION ONSET');

$pdf->Text(155, 32.5, '8. -12 CHECK ALL APPROPIATE');
$pdf->Text(155, 35.25, 'TO ADVERSE REACTION');


$PATIENT_DIED_MARK = 'X';
$INVOLVED_MARK = 'X';
$INVOLVED_PERS_MARK = 'X';
$LIFE_TR_MARK = 'X';
$CONGENITAL_MARK = 'X';
$OTHER_MARK = 'X';

$pdf->SetFont('helvetica', '', 7);
$pdf->Text(156, 44.25, $PATIENT_DIED_MARK); //PATIENT DIED MARK
$pdf->Text(156, 49.25, $INVOLVED_MARK);
$pdf->Text(156, 60.25, $INVOLVED_PERS_MARK);
$pdf->Text(156, 71.25, $LIFE_TR_MARK);
$pdf->Text(156, 76.25, $CONGENITAL_MARK);
$pdf->Text(156, 81.25, $OTHER_MARK);

$pdf->SetFont('helvetica', '', 7);

$pdf->Text(160, 44.25, 'PATIENT DIED');
$pdf->Text(160, 49.25, 'INVOLVED OR PROLONGED');
$pdf->Text(160, 52.25, 'INPATIENT');
$pdf->Text(160, 55.25, 'HOSPITALIZATION');

$pdf->Text(160, 60.25, 'INVOLVED PERSISTENCE');
$pdf->Text(160, 63.25, 'OR SIGNIFICANT');
$pdf->Text(160, 66.25, 'DISABILITY OR INCAPACITY');

$pdf->Text(160, 71.25, 'LIFE THREATENING');

$pdf->Text(160, 76.25, 'CONGENITAL ANOMALY');

$pdf->Text(160, 81.25, 'OTHER');

// set cell padding
$pdf->setCellPaddings(1, 1, 1, 0);

// set cell margins
$pdf->setCellMargins(0, 0, 0, 0);

// set some text for example
$txt = 'Lorem ipsum dolor sit amet, consectetur';

// MultiCell($w (min. breite), $h (min. höhe), $txt (text Variable), $border=0 (rand sichtbar), $align='J', $fill=0, $ln=1 (fortlaufend/neue Zeile), $x='', $y='', $reseth=true, $stretch=0, $ishtml=false, $autopadding=true, $maxh=0)

$pdf->MultiCell(180, 5, 'I. SUSPECT DRUG(S) INFORMATION', 1, 'C', 0, 1, 15, 92.6, true);

$pdf->MultiCell(140, 25, '14. SUSPECT DRUG(S) (include generic name) '.$txt, 1, 'L', 0, 0, '' ,'', true);
$pdf->MultiCell(40, 25, '20. DID REACTION ABATE AFTERR STOPPING DRUG? 
	'.$txt1.'  YES

	'.$txt2.'  NO

	'.$txt3.'  NA', 1, 'L', 0, 1, '', '', true);

$pdf->MultiCell(90, 15, '15. DAILY DOSE(S) '.$txt, 1, 'L', 0, 0, '' ,'', true);
$pdf->MultiCell(50, 15, '16. ROUTE(S) OF ADMINISTRATION  ', 1, 'L', 0, 0, '', '', true);
$pdf->MultiCell(40, 20, '21. DID REACTION REAPPEAR AFTER REINTRODUCTION 
	'.$txt4.' YES
	'.$txt5.' NO
	'.$txt6.' NA', 1, 'L', 0, 0, '', '', true);
$pdf->MultiCell(1, 15, '', 0, 'L', 0, 1, '', '', true);
$pdf->MultiCell(140, 5, '17. INDICATION(S) FOR USE '.$txt, 1, 'L', 0, 1, '' ,'', true);


// Multicell
$pdf->MultiCell(90, 11.7, '18. Therapy dates: '.$txt, 1, 'L', 0, 0, 15, 142.4, true);
$pdf->MultiCell(90, 11.7, '19. Therapy duration: '.$txt, 1, 'L', 0, 1, '', '', true);
$pdf->MultiCell(180, 5, 'III. CONCOMITANT DRUG(S) AND HISTORY', 1, 'C', 0, 1, '', '', true);
$pdf->MultiCell(180, 25, '22. CONCOMITANT DRUG(S) AND DATES OF ADMINISTRATION (exclude those used to treat reaction)'.$txt, 1, 'L', 0, 1, '' ,'', true);
$pdf->MultiCell(180, 25, '23. OTHER RELEVANT HISTORY (e.g. diagnoses, allergies, pregnancy with last menstrual period, etc.)'.$txt, 1, 'L', 0, 1, '', '', true);
$pdf->MultiCell(180, 5, 'IV. MANUFACTURER INFORMATION ', 0, 'C', 0, 1, '', '', true);

$pdf->MultiCell(90, 10, '24a. NAME AND ADDRESS OF MANUFACTURER: '.$txt, 1, 'L', 0, 0,'','', true);
$pdf->MultiCell(90, 51, '26-26a. NAME AND ADRESS OF REPORTER (INCLUDE ZIP CODE) '.$txt, 1, 'L', 0, 0, '', '', true);
$pdf->MultiCell(1, 10, '', 0, 'L', 0, 1, '', '', true);
$pdf->MultiCell(45, 11, 'ORIGINAL REPORT NO.'.$txt, 1, 'L', 0, 0, '', '', true);
$pdf->MultiCell(45, 11, '24b. MFR CONTROL NO. '.$txt, 1, 'L', 0, 1, '', '', true);
$pdf->MultiCell(45, 19, '24c. DATE RECEIVED BY MANUFACTURER: '.$txt, 1, 'L', 0, 0, '' ,'', true);
$pdf->MultiCell(45, 19, '24d. REPORT SOURCE ', 1, 'L', 0, 1, '', '', true);
//
$pdf->MultiCell(45, 3, 'STUDY', 0, 'L', 0, 1, '60', '238', true);
$pdf->MultiCell(45, 3, 'LITERATURE', 0, 'L', 0, 1, '60', '240.5', true);
$pdf->MultiCell(45, 3, 'HEALTH PROFESSIONAL', 0, 'L', 0, 1, '60', '243', true);
$pdf->MultiCell(45, 3, 'REGULATORY AUTHORITY', 0, 'L', 0, 1, '60', '245.5', true);
$pdf->MultiCell(45, 6, 'OTHER', 0, 'L', 0, 1, '60', '248', true);

$pdf->MultiCell(45, 11, 'DATE OF THIS REPORT'.$txt, 1, 'L', 0, 0, '', '', true);
$pdf->MultiCell(45, 11, '5a. REPORT TYPE ', 1, 'L', 0, 1, '' ,'', true);
$pdf->MultiCell(45, 11, 'INITIAL X', 0, 'L', 0, 1, '60' ,'258', true);

$pdf->MultiCell(45, 11, 'FOLLOW-UP  X', 0, 'L', 0, 1, '60' ,'280.5', true);

$pdf->Ln(0);

// reset pointer to the last page
$pdf->lastPage();

// ---------------------------------------------------------

//Close and output PDF document
$pdf->Output('CIOMS.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+
