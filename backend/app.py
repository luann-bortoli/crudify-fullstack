from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

data_file = "clientes.json"

def lerClientes():
    if not os.path.exists(data_file):
        return[]
    
    with open(data_file, "r") as f:
        return json.load(f)
    
def salvarClientes(dados):
    with open(data_file, "w") as f:
        json.dump(dados, f, indent=4)

@app.route("/clientes", methods=["GET"])
def listarClientes():
    dados = lerClientes()
    return jsonify(dados)

@app.route("/clientes", methods=["POST"])
def adicionarCliente():
    novo = request.json
    dados = lerClientes()

    if dados:
        maiorId = max(cli["ID"] for cli in dados)
    else:
        maiorId = 0

    novoId = maiorId + 1
    novo["ID"] = novoId

    dados.append(novo)
    salvarClientes(dados)

    return jsonify({"mensagem": "Cliente adicionado"})

@app.route("/clientes/<int:id>", methods=["DELETE"])
def deletarCliente(id):
    dados = lerClientes()
    dados = [cli for cli in dados if cli["ID"] !=id]

    salvarClientes(dados)

    return jsonify({"mensagem": "Cliente deletado"})

@app.route("/clientes/<int:id>", methods=["PUT"])
def editarCliente(id):
    dados = lerClientes()
    atualizacao = request.json

    for cli in dados:
        if cli["ID"] == id:
            cli.update(atualizacao)
        
    salvarClientes(dados)

    return jsonify({"mensagem": "Cliente editado"})

if __name__ == "__main__":
    app.run(debug=True)