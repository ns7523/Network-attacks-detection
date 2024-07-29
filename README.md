# Network-attacks-detection
A Hybrid feature extraction method with machine learning for detecting the presence of network attacks

### Download  Full Project & Report from Drive : 
  [Drive Link](https://drive.google.com/file/d/1u_e5eiiS--mvURvy8EvVQaXX2AOQCDoQ/view?usp=sharing)

This project implements a hybrid feature extraction method combined with machine learning techniques to detect network attacks. The aim is to enhance the accuracy and efficiency of intrusion detection systems (IDS) by leveraging advanced feature extraction and classification algorithms.

## Introduction

Network security is a critical aspect of modern digital infrastructure. Intrusion Detection Systems (IDS) play a crucial role in identifying and mitigating potential threats. This project focuses on developing a hybrid feature extraction method that combines statistical, syntactical, and machine learning techniques to detect network attacks more accurately.

## Features

- Hybrid feature extraction combining statistical and syntactical methods
- Use of machine learning algorithms for classification
- High accuracy in detecting various types of network attacks
- Easy-to-use interface for training and testing the model

## System Design
<table>
  <tr>
    <th>Chosen System Design</th>
  </tr>
  <tr>
    <td align="center"><img width="420" alt="image" src="https://github.com/user-attachments/assets/ba71986c-5bea-4904-bbf7-8e1845bef8a3"></td>
  </tr>
  <tr>
    <th>Component 1-n </th>
  </tr>
  <tr>
    <td align="center"><img width="420" alt="image" src="https://github.com/user-attachments/assets/c64f9dce-d8db-4f46-8095-3fd513648424"></td>
  </tr>
</table>

## Installation
`Use Anaconda Navigator as base root.`
To install and run this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/ns7523/Network-attacks-detection.git
    ```

2. Create and activate a virtual environment (optional but recommended):
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
    
## Usage

To use this project, follow these steps:

1. Navigate to the project directory:
    ```sh
    cd Network-attacks-detection
    ```
2. Run :
   ```bash
   python app.py
   ```
3. Login to Local host 

## Dataset

It contains various features representing network traffic and labels indicating normal or attack behavior. 

## Model Architecture

The model architecture consists of:

1. **Feature Extraction**: Hybrid method combining statistical and syntactical `feature extraction` techniques.
2. **Machine Learning Algorithms**: Various algorithms such as `Decision Trees`, `Random Forests`, `SVM`, and `Neural Networks` are used for classification.

## Results

The model achieves high accuracy in detecting network attacks. Below are some key performance metrics:
- Attack: `1`
- No Attack: `0`
- Accuracy: `90%`
- Precision: `90%`
- Recall: `90%`

For detailed results, refer to the `results` directory.

### Project Screenshots
   <table>
     <tr>
       <th>Homepage</th>
       <th>Sign Up</th>
      <tr>
       <td><img width="385" alt="image" src="https://github.com/user-attachments/assets/fad66726-8c99-4015-a917-580e0a37a60e"></td>
       <td align="center"><img width="140" alt="image" src="https://github.com/user-attachments/assets/5a4af279-e6bd-4d06-bb2f-473769c24a8f" ></td>
      </tr>
     </tr>
     <tr>
       <th>Prediction</th>
       <th>Results</th>
     </tr>
     <tr>
       <td><img width="400" alt="image" src="https://github.com/user-attachments/assets/3f15b673-413d-47e7-b759-2086889dd15f"></td>
       <td><img width="392" alt="image" src="https://github.com/user-attachments/assets/06d54568-f392-403b-b24f-07d16dbf57f3"></td>
     </tr>
   </table>

## Contact

For any inquiries or feedback, please contact me at nsakash752003@gmail.com

